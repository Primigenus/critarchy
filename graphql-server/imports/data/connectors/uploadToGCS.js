import path from 'path';
import Storage from '@google-cloud/storage';
import sharp from 'sharp';

const THUMB_SIZES = [600, 320];

const uploadImageWithSize = ({ bucket, file, size }) => new Promise((resolve, reject) => {
  const info = path.parse(file.originalname);
  // TODO: place in some kind of folder structure (based on user?)
  const newExt = size === 'orig' ? info.ext : '.jpg';
  const filename = `${Date.now()}_${info.name}_${size}${newExt}`;
  const blob = bucket.file(filename);
  let buffer = new Promise(res => res(file.buffer));

  if(size !== 'orig') {
    buffer = sharp(file.buffer)
      .withoutEnlargement()
      .resize(size)
      .crop(sharp.strategy.attention)
      .toFormat('jpeg')
      .toBuffer();
  }

  const blobStream = blob.createWriteStream({
    // Google recommends setting this to false for files <10 MB
    // see https://googlecloudplatform.github.io/google-cloud-node
    //     /#/docs/google-cloud/0.45.0/storage/file?method=createWriteStream
    resumable: false,
    public: true,
    gzip: true,
    metadata: {
      contentType: 'image/jpeg',
    },
  });

  blobStream.on('error', (err) => {
    reject(`Error handling upload to GCS: ${err}`);
  });

  blobStream.on('finish', () => {
    resolve({
      size,
      filename: file.originalname,
      publicUrl: `https://storage.googleapis.com/${bucket.name}/${filename}`,
    });
  });

  buffer.then(
    buff => blobStream.end(buff),
    err => reject(`Error sending image from sharp to GCS: ${err}`),
  );
});

const uploadImage = ({ bucket, file }) => {
  const promises = ['orig'].concat(THUMB_SIZES).map(size => uploadImageWithSize({
    bucket,
    file,
    size,
  }));
  return Promise.all(promises);
};

const uploadImages = ({ bucket, files }) => {
  if(files.length > 5) {
    throw new Error('Too many files queued for upload.');
  }
  return Promise.all(files.map(
    async file => await uploadImage({ bucket, file }),
  ));
};

export default async (files, settings) => {
  const { GCLOUD_PROJECT_ID, GCS_BUCKET, GCS_KEY_FILENAME } = settings;
  const storage = Storage({
    projectId: GCLOUD_PROJECT_ID,
    keyFilename: GCS_KEY_FILENAME,
  });
  const bucket = storage.bucket(GCS_BUCKET);

  return uploadImages({ bucket, files });
};
