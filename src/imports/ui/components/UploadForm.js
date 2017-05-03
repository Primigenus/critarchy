import React from 'react';

type Props = { onSubmit: Array<File> => Promise<any> };

export default class UploadForm extends React.Component {
  props: Props;
  state = {
    uploadedImages: null,
    uploadingImages: null,
    uploading: false,
    uploadError: null,
    selectedFiles: false,
  };
  static formatFileSize(size: string): number {
    // http://stackoverflow.com/a/20463021/16308
    const fn = (a, b, c, d, e) =>
      ((b = Math), (c = b.log), (d = 1e3), (e = (c(a) / c(d)) | 0), a / b.pow(d, e)).toFixed(2) +
      ' ' +
      (e ? 'kMGTPEZY'[--e] + 'B' : 'Bytes');
    return fn(size);
  }
  changeFiles(evt: Event): void {
    this.files = evt.target.files;

    const arrayFiles = Array.from(this.files);

    const fileTooBig = arrayFiles.filter(f => f.size >= 5000000).length > 0;
    const tooManyFiles = arrayFiles.length > 5;
    let uploadError = null;

    if (fileTooBig) {
      uploadError = 'Please only select images smaller than 5MB.';
    }
    if (tooManyFiles) {
      uploadError = 'Please upload at most 5 files.';
    }

    this.setState({
      selectedFiles: true,
      uploadError,
      uploadingImages: arrayFiles,
    });
  }
  async handleSubmit(evt: Event): void {
    evt.preventDefault();
    this.setState({ uploading: true });
    let result;
    try {
      result = await this.props.onSubmit(this.files);
      this.setState({
        uploadedImages: result.data.uploadImage
          .map(images => images.map(image => image.publicUrl))
          .reduce((a, b) => a.concat(b)),
        uploading: false,
      });
    } catch (e) {
      console.error(e);
      this.setState({
        uploading: false,
        uploadError: 'An error occurred on the server. Please try again.',
      });
    }
  }
  render(): HTMLFormElement {
    return (
      <form method="post" onSubmit={evt => this.handleSubmit(evt)} encType="multipart/form-data">
        <p>
          <label htmlFor="file">File(s) to upload</label>
          <input type="file" id="file" multiple onChange={evt => this.changeFiles(evt)} />
        </p>
        {this.renderUploadingMessage()}
        {this.renderUploadError()}
        {this.renderUploadingImages()}
        <p>
          <input
            type="submit"
            defaultValue="Upload"
            disabled={
              !this.state.selectedFiles || !!this.state.uploading || !!this.state.uploadError
            }
          />
        </p>
        {this.renderUploadedImages()}
      </form>
    );
  }
  renderUploadingMessage(): HTMLDivElement | HTMLSpanElement {
    return this.state.uploading ? <div className="loading">Uploading...</div> : <span />;
  }
  renderUploadError(): ?HTMLParagraphElement {
    if (this.state.uploadError) {
      return <p>{this.state.uploadError}</p>;
    }
    return null;
  }
  renderUploadingImages(): ?HTMLDivElement {
    const { uploadingImages } = this.state;
    if (uploadingImages) {
      return (
        <div>
          You selected:
          <ul>
            {uploadingImages.map((file, i) => (
              <li key={i}>
                <img src={window.URL.createObjectURL(file)} alt="" style={{ height: 30 }} />
                {file.name} ({UploadForm.formatFileSize(file.size)})
                {i + 1 < uploadingImages.length ? ', ' : ''}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  }
  renderUploadedImages(): ?Array<HTMLParagraphElement> {
    const { uploadedImages } = this.state;
    if (uploadedImages) {
      return uploadedImages.map((url, i) => (
        <p key={i}>
          You uploaded this image!<br />
          <img src={url} alt="" style={{ height: 300 }} />
        </p>
      ));
    }
    return null;
  }
}
