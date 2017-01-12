import React from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../data/withData';
import uploadClient from '../data/uploadWithApollo';
import layout from '../hocs/layout';
import UploadForm from '../components/UploadForm';

const UPLOAD_IMAGE = gql`
  mutation uploadImage($files: [UploadedFile!]!) {
    uploadImage(files: $files) {
      publicUrl
    }
  }
`;

class UploadImage extends React.Component {
  static async handleFormSubmit(files) {
    return await uploadClient.mutate({
      mutation: UPLOAD_IMAGE,
      variables: { files },
    });
  }
  render() {
    return (
      <div>
        <UploadForm onSubmit={ UploadImage.handleFormSubmit } />
      </div>
    );
  }
}

export default compose(
  layout({ title: 'Upload' }),
  withData,
  graphql(UPLOAD_IMAGE),
)(UploadImage);
