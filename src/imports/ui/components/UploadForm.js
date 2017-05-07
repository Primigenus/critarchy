// @flow

import React from 'react';
import type { UploadResult } from '../../flowtypes/types';

export default class UploadForm extends React.Component {
  files: FileList;
  props: {
    onSubmit: FileList => Promise<UploadResult>,
  };
  state = {
    uploadedImages: [],
    uploadingImages: [],
    uploading: false,
    uploadError: undefined,
    selectedFiles: false,
  };
  static formatFileSize(size: number): string {
    // http://stackoverflow.com/a/20463021/16308
    const fn = (a, b, c, d, e) =>
      ((a = +a), (b = Math), (c = b.log), (d = 1e3), (e = (c(a) / c(d)) | 0), a /
        b.pow(d, e)).toFixed(2) +
      ' ' +
      (e ? 'kMGTPEZY'[--e] + 'B' : 'Bytes');
    return fn(size);
  }
  changeFiles = ({ target }: { target: HTMLInputElement }): void => {
    this.files = target.files;

    const arrayFiles = Array.from(this.files).map(f => ({
      file: f,
      tooBig: f.size >= 5000000,
    }));

    const fileTooBig = arrayFiles.find(f => f.tooBig) !== undefined;
    const tooManyFiles = arrayFiles.length > 5;
    // const wrongType = arrayFiles.find(f => /jpg|jpeg|png$/.test(f.type)) !== undefined;
    let uploadError = null;

    if (fileTooBig) {
      uploadError = 'Please select only images smaller than 5MB.';
    }
    if (tooManyFiles) {
      uploadError = 'Please upload at most 5 images.';
    }

    this.setState({
      selectedFiles: true,
      uploadError,
      uploadingImages: arrayFiles,
    });
  };
  handleSubmit = async (evt: Event): Promise<mixed> => {
    evt.preventDefault();
    this.setState({ uploading: true });
    let result;
    try {
      result = await this.props.onSubmit(this.files);
      this.setState({
        uploadedImages: result.data.uploadImage
          .map(images => images.map(image => image.thumb_small))
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
  };
  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit} encType="multipart/form-data">
        <div className="upload-box">
          <label htmlFor="file" tabIndex="0" className="button">
            Choose file(s) to upload...
          </label>
          <input type="file" id="file" multiple onChange={this.changeFiles} />
          {this.renderUploadError()}
        </div>

        {this.renderUploadingImages()}

        {this.renderUploadingMessage()}

        {!this.state.uploadError &&
          this.state.selectedFiles &&
          <p>
            <input
              type="submit"
              className="button"
              defaultValue="Upload to sketchbook"
              disabled={
                !this.state.selectedFiles || !!this.state.uploading || !!this.state.uploadError
              }
            />
          </p>}

        {this.renderUploadedImages()}

        <style jsx>{`
          label {
            display: block;
            font-weight: bold;
          }
          input[type=file] {
            width: 0.1px;
          	height: 0.1px;
          	opacity: 0;
          	overflow: hidden;
          	position: absolute;
          	z-index: -1;
          }
          .upload-box label:focus {
            outline: auto;
          }
        `}</style>
      </form>
    );
  }
  renderUploadingMessage() {
    return this.state.uploading ? <div className="loading">Uploading...</div> : null;
  }
  renderUploadError() {
    return this.state.uploadError
      ? <div className="upload-error">
          <p>{this.state.uploadError}</p>
          <style jsx>{`
            .upload-error {
              margin-top: 1rem;
              padding: 1rem;
              background-color: var(--warningColor);
            }
            .upload-error p { margin: 0; }
          `}</style>
        </div>
      : null;
  }
  renderUploadingImages() {
    const { uploadingImages } = this.state;
    if (this.state.uploadError) {
      return null;
    }
    if (uploadingImages) {
      return (
        <div className="uploading-images">
          <ul>
            {uploadingImages.map(({ file }, i) => (
              <li key={i}>
                <div className="image-preview">
                  <img src={window.URL.createObjectURL(file)} alt="" />
                  <div className="image-details">
                    <span className="filename">{file.name}</span>
                    <span className="filesize">
                      {UploadForm.formatFileSize(file.size)}
                    </span>
                  </div>
                  <div className="image-title">
                    <input type="text" name={`title-${i}`} required />
                    <label htmlFor={`title-${i}`}>
                      Enter a title for this piece
                    </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <style jsx>{`
            .uploading-images {
              margin-top: 1rem;
            }
            .uploading-images ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
            .uploading-images li {
              margin-bottom: 2rem;
              line-height: 2rem;
            }
            .image-details {
              display: flex;
              justify-content: space-between;
              font-size: smaller;
              color: var(--textMinorColor);
            }
            .uploading-images img {
              margin: 0 -2rem;
              vertical-align: middle;
              width: 100vw;
              height: 200px;
              object-fit: contain;
              background-color: black;
            }
            .uploading-images .filename {
              white-space: nowrap;
              text-overflow: ellipsis;
              max-width: 45vw;
              overflow: hidden;
              display: inline-block;
              vertical-align: middle;
              margin-right: 1rem;
            }
            .image-title {
              position: relative;
            }
            .image-title label {
              position: absolute;
              top: 2px; left: 8px;
              pointer-events: none;
              color: #555;
              font-size: smaller;
            }
            .image-title input[type=text] {
              border: solid 1px #555;
              padding: .5rem;
              display: block;
              width: 100%;
              box-sizing: border-box;
            }
            .image-title input:focus + label, .image-title input:valid + label {
              opacity: 0;
            }
          `}</style>
        </div>
      );
    }
    return null;
  }
  renderUploadedImages() {
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
