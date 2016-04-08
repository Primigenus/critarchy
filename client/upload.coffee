fileUploadsName = "myFileUploads"

Template.registerHelper "imgix", (url, def) ->
  source = Meteor.settings.public.imgix.name
  token = Meteor.settings.public.imgix.token
  url = encodeURIComponent(url)
  (new imgix.URL("https://#{source}.imgix.net/#{url}", {w:200}, token)).getUrl()

Template.uploadArt.onCreated ->
  Session.setDefault 'activeUploads', []
  Session.setDefault 'activeUploadProgress', 0

Template.uploadArt.helpers
  uploads: -> Session.get 'activeUploads'

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

    Session.set "activeUploads", []
    Session.set "activeUploadProgress", 0

    files = evt.target.files or evt.originalEvent.dataTransfer.files

    uploads = _.map files, (file) ->
      upload = new Slingshot.Upload fileUploadsName
      err = upload.validate file
      if err then console.error err
      upload.file = file
      # upload.send file, uploadDone
      upload

    Tracker.autorun (computation) ->
      activeUploads = []
      overallProgress = 0

      _.each uploads, (uploader) ->
        prog = 100 * uploader.progress()
        imageDetails =
          url: uploader.url yes
          progress: prog

        activeUploads.push imageDetails
        overallProgress += prog

      overallProgress = overallProgress / files.length

      Session.set "activeUploads", activeUploads
      Session.set "activeUploadProgress", ~~overallProgress

      if overallProgress is 100
        computation.stop()

  "submit": (evt) ->
    evt.preventDefault()

    uploadDone = (error, downloadUrl) ->
      if error then console.error(error)
      else Meteor.users.update Meteor.userId(), $push: "profile.files": downloadUrl

    uploads = Session.get("activeUploads")
    _.each uploads, (upload) -> upload.send(upload.file, uploadDone)
    # file = $("#upload")[0].files[0]
    # err = uploader.validate file
    # if err then console.error err
    # else uploader.send file, uploadDone


Template.progressBar.helpers
  progress: -> Session.get("activeUploadProgress")
