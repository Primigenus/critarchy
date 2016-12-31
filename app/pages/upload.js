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
      uploading: false,
    };
  }
  onSubmit(evt) {
    evt.preventDefault();
    this.setState({
      uploading: true,
    });
    uploadWithApollo.mutate({
      mutation: UPLOAD_IMAGE,
      variables: { id: 42, files: this.files },
    })
    .then(({ data }) => {
      this.setState({
        uploadedImages: data.uploadImage.map(image => image.publicUrl),
        uploading: false,
      });
    })
    .catch(err => console.log('Error submitting mutation', err));
  }
  changeFiles(evt) {
    this.files = evt.target.files;
  }
  render() {
    const { uploading, uploadedImages } = this.state;
    return (
      <div>
        <form method="post" onSubmit={ evt => this.onSubmit(evt) } encType="multipart/form-data">
          { uploading ? <div className="loading">Uploading...</div> : <span /> }
          <p><input type="file" onChange={ evt => this.changeFiles(evt) } /></p>
          <p><input type="submit" defaultValue="Upload" disabled={ !!uploading } /></p>
          { uploadedImages
            ? uploadedImages.map((url, i) => <p key={ i }>You uploaded this image! <img src={ url } alt="" /></p>)
            : <span />
          }
        </form>
      </div>
    );
  }
});
