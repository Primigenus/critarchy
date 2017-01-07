import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloHOC from '../hocs/apollohoc';
import uploadClient from '../data/uploadWithApollo';
import layout from '../hocs/layout';

const UPLOAD_IMAGE = gql`
  mutation uploadImage($id: Int!, $files: [UploadedFile!]!) {
    uploadImage(id: $id, files: $files) {
      publicUrl
    }
  }
`;

class UploadImage extends React.Component {
  static formatFileSize(size) {
    // http://stackoverflow.com/a/20463021/16308
    // eslint-disable-next-line
    const fn = (a,b,c,d,e) => (b=Math,c=b.log,d=1e3,e=c(a)/c(d)|0,a/b.pow(d,e)).toFixed(2)+' '+(e?'kMGTPEZY'[--e]+'B':'Bytes');
    return fn(size);
  }
  constructor(props) {
    super(props);
    this.state = {
      uploadedImages: null,
      uploadingImages: null,
      uploading: false,
      uploadError: null,
    };
  }
  changeFiles(evt) {
    this.files = evt.target.files;

    const arrayFiles = Array.from(this.files);

    const fileTooBig = arrayFiles.filter(f => f.size >= 5000000).length > 0;
    const tooManyFiles = arrayFiles.length > 5;
    let uploadError = null;

    if(fileTooBig) {
      uploadError = 'Please only select images smaller than 5MB.';
    }
    if(tooManyFiles) {
      uploadError = 'Please upload at most 5 files.';
    }

    this.setState({
      uploadError,
      uploadingImages: arrayFiles,
    });
  }
  async onSubmit(evt) {
    evt.preventDefault();
    this.setState({
      uploading: true,
    });
    let result;
    try {
      result = await uploadClient.mutate({
        mutation: UPLOAD_IMAGE,
        variables: { id: 42, files: this.files },
      });
      this.setState({
        uploadedImages: result.data.uploadImage
          .map(images => images.map(image => image.publicUrl))
          .reduce((a, b) => a.concat(b)),
        uploading: false,
      });
    } catch (e) {
      this.setState({
        uploading: false,
        uploadError: 'An error occurred on the server. Please try again.',
      });
    }
  }
  render() {
    const { uploading, uploadedImages, uploadingImages, uploadError } = this.state;
    return (
      <div>
        <form method="post" onSubmit={ evt => this.onSubmit(evt) } encType="multipart/form-data">

          <p>
            <label htmlFor="file">File(s) to upload</label>
            <input type="file" id="file" multiple onChange={ evt => this.changeFiles(evt) } />
          </p>

          { uploading ? <div className="loading">Uploading...</div> : <span /> }

          { uploadError && <p>{ uploadError }</p> }

          { uploadingImages ?
            <div>
              You selected:
              <ul>
                { uploadingImages.map((file, i) => <li key={ i }>
                  <img src={ window.URL.createObjectURL(file) } alt="" style={ { height: 30 } } />
                  { file.name } ({ UploadImage.formatFileSize(file.size) })
                  { i + 1 < uploadingImages.length ? ', ' : '' }
                </li>) }
              </ul>
            </div>
            : null
          }

          <p><input type="submit" defaultValue="Upload" disabled={ !!uploading || !!uploadError } /></p>

          {
            uploadedImages && uploadedImages.map((url, i) => <p key={ i }>
              You uploaded this image!<br />
              <img src={ url } alt="" style={ { height: 300 } } />
            </p>)
          }

        </form>
      </div>
    );
  }
}

export default compose(
  layout({ title: 'Upload' }),
  ApolloHOC({ secure: true }),
  graphql(UPLOAD_IMAGE),
)(UploadImage);
