import React from 'react';
import gql from 'graphql-tag';
import uploadWithApollo from '../hocs/uploadWithApollo';
import layout from '../hocs/layout';

const UPLOAD_IMAGE = gql`
  mutation uploadImage($id: Int!, $files: [UploadedFile!]!) {
    uploadImage(id: $id, files: $files) {
      publicUrl
    }
  }
`;

export default layout('Upload', class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImages: null,
      uploadingImages: null,
      uploading: false,
    };
  }
  async onSubmit(evt) {
    evt.preventDefault();
    this.setState({
      uploading: true,
    });
    const result = await uploadWithApollo.mutate({
      mutation: UPLOAD_IMAGE,
      variables: { id: 42, files: this.files },
    });
    this.setState({
      uploadedImages: result.data.uploadImage
        .map(images => images.map(image => image.publicUrl))
        .reduce((a, b) => a.concat(b)),
      uploading: false,
    });
  }
  changeFiles(evt) {
    this.files = evt.target.files;

    const arrayFiles = Array.from(this.files);
    this.setState({
      uploadTooBigError: arrayFiles.filter(f => f.size >= 5000000).length > 0,
      uploadingImages: arrayFiles,
    });
  }
  formatFileSize(size) {
    // http://stackoverflow.com/a/20463021/16308
    // eslint-disable-next-line
    const fn = (a,b,c,d,e) => (b=Math,c=b.log,d=1e3,e=c(a)/c(d)|0,a/b.pow(d,e)).toFixed(2)+' '+(e?'kMGTPEZY'[--e]+'B':'Bytes');
    return fn(size);
  }
  render() {
    const { uploading, uploadedImages, uploadingImages, uploadTooBigError } = this.state;
    return (
      <div>
        <form method="post" onSubmit={ evt => this.onSubmit(evt) } encType="multipart/form-data">
          { uploading ? <div className="loading">Uploading...</div> : <span /> }
          <p><input type="file" onChange={ evt => this.changeFiles(evt) } /></p>
          <p><input type="submit" defaultValue="Upload" disabled={ !!uploading || !!uploadTooBigError } /></p>
          { uploadTooBigError && <p>Please only select images smaller than 5MB.</p> }
          { !uploadTooBigError && uploadingImages && uploadingImages
            .map(({ name, size }, i) => <p key={ i }>
              Image queued for upload: { name } ({ this.formatFileSize(size) }).
            </p>)
          }
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
});
