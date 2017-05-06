import { Art } from '../collections';

const PAGE_SIZE = 10;

export default class ArtConnector {
  static async getById(id) {
    return await Art.findOne(id);
  }
  static async getByPageNum(pageNum) {
    return await Art.find({}, { skip: PAGE_SIZE * (pageNum - 1), limit: PAGE_SIZE }).fetch();
  }
  static async addUploadedFiles(userId, files) {
    return Promise.all(
      files.map(
        async sizes =>
          await Art.insert({
            filename: sizes[0].filename,
            title: sizes[0].filename,
            image: {
              original: sizes.find(({ size }) => size === 'orig').publicUrl,
              thumb_large: sizes.find(({ size }) => size === 600).publicUrl,
              thumb_small: sizes.find(({ size }) => size === 320).publicUrl,
            },
            createdBy: userId,
            createdOn: +new Date(),
          })
      )
    );
  }
}
