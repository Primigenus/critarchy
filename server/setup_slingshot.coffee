fileUploadsName = "myFileUploads"
Meteor.startup ->
  Slingshot.createDirective fileUploadsName, Slingshot.GoogleCloud,
    acl: "public-read"
    bucket: Meteor.settings.GoogleCloudBucket
    GoogleAccessId: Meteor.settings.GoogleAccessId
    GoogleSecretKey: Assets.getText("google-cloud-service-key.pem")
    authorize: (file, context) ->
      # album = Albums.findOne context.albumId
      # album?.userId is @userId
      unless @userId
        throw new Meteor.Error "Login Required", "Please log in before posting files"
      yes

    key: (file, context) ->
      # context.albumId + "/" + Date.now() + "-" + file.name
      user = Meteor.users.findOne(@userId)
      user._id + "/" + Date.now() + "-" + file.name.replace(/\s/g, "")
