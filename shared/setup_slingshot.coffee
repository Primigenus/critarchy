fileUploadsName = "myFileUploads"

Slingshot.fileRestrictions fileUploadsName,
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"]
  maxSize: 10 * 1024 * 1024 # 10 MB
