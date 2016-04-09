fileUploadsName = "myFileUploads"

Template.registerHelper "imgix", (url, def) ->
  source = Meteor.settings.public.imgix.name
  token = Meteor.settings.public.imgix.token
  url = encodeURIComponent(url)
  (new imgix.URL("https://#{source}.imgix.net/#{url}", {w:200}, token)).getUrl()

Template.uploadArt.onCreated ->
  @uploaders = []
  @activeUploads = new ReactiveVar([])
  @activeUploadProgress = new ReactiveVar(0)
  # Session.setDefault 'activeUploads', []
  # Session.setDefault 'activeUploadProgress', 0

Template.uploadArt.helpers
  uploads: ->
    inst = Template.instance()
    uploaders = inst.activeUploads.get()
    uploaders
  progress: ->
    inst = Template.instance()
    inst.activeUploadProgress.get()
  file: -> _.last Meteor.user()?.profile.files, 5

Template.uploadArt.events
  'dragover .upload-dropzone, dragenter .upload-dropzone': (evt) ->
    evt.preventDefault()
    evt.stopPropagation()
    $(evt.target)?.addClass "dragging-over"
  'dragleave .upload-dropzone': (evt) ->
    evt.preventDefault()
    evt.stopPropagation()
    $(evt.target)?.removeClass "dragging-over"

  'dropped form': (evt) ->
    evt.preventDefault()

    inst = Template.instance()
    inst.activeUploads.set []
    inst.activeUploadProgress.set 0

    # First, find which files we dropped
    files = evt.target.files or evt.originalEvent.dataTransfer.files

    # Create a new Slingshot Upload for each file
    inst.uploaders = _.map files, (file) ->
      upload = new Slingshot.Upload fileUploadsName
      err = upload.validate file
      if err then console.error err
      # Store the HTML5 file object on the upload for later use
      upload.file = file
      # upload.send file, uploadDone
      upload

    # Use an autorun to watch the upload progress of uploading files
    # and be able to report it to the UI
    Tracker.autorun (computation) ->
      activeUploads = []
      overallProgress = 0

      _.each inst.uploaders, (uploader) ->
        # progress() is reactive
        prog = 100 * uploader.progress()
        imageDetails =
          url: uploader.url yes
          progress: prog

        # save the blob and progress per image for display
        activeUploads.push imageDetails
        overallProgress += prog

      overallProgress = overallProgress / files.length

      inst.activeUploads.set activeUploads
      inst.activeUploadProgress.set ~~overallProgress

      if overallProgress is 100
        computation.stop()

  "submit": (evt) ->
    evt.preventDefault()

    uploadDone = (error, downloadUrl) ->
      if error then console.error(error)
      else
        Meteor.users.update Meteor.userId(), $push: "profile.files": downloadUrl

    inst = Template.instance()
    _.each inst.uploaders, (upload) -> upload.send(upload.file, uploadDone)

    # file = $("#upload")[0].files[0]
    # err = uploader.validate file
    # if err then console.error err
    # else uploader.send file, uploadDone
