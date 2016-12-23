import Storage from '@google-cloud/storage';

export default async (id, files, settings) => {
  const { GCLOUD_PROJECT_ID, GCS_BUCKET, GCS_KEY_FILENAME } = settings;
  const storage = Storage({
    projectId: GCLOUD_PROJECT_ID,
    keyFilename: GCS_KEY_FILENAME,
  });
  const bucket = storage.bucket(GCS_BUCKET);

  const promises = files.map(file => new Promise((resolve, reject) => {
    // TODO: place in some kind of folder structure (based on user?)
    const gcsName = `${Date.now()}_${file.originalname}`;
    const blob = bucket.file(gcsName);
    // const thumbName = `thumb_${gcsName}`;
    // TODO: resize using npm sharp package and save a thumb copy

    const blobStream = blob.createWriteStream({
      // Google recommends setting this to false for files <10 MB
      // see https://googlecloudplatform.github.io/google-cloud-node/#/docs/google-cloud/0.45.0/storage/file?method=createWriteStream
      resumable: false,
      public: true,
      gzip: true,
      metadata: {
        contentType: file.mimetype,
      },
    });

    blobStream.on('error', (err) => {
      reject(`Error handling upload to GCS: ${err}`);
    });

    blobStream.on('finish', () => {
      resolve({
        filename: file.originalname,
        publicUrl: `https://storage.googleapis.com/${bucket.name}/${gcsName}`,
      });
    });

    blobStream.end(file.buffer);
  }));

  return Promise.all(promises);
};
