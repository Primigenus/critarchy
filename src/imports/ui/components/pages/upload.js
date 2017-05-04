import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import uploadClient from '../../../data/uploadWithApollo';
import Page from '../../hocs/Page';
import UploadForm from '../UploadForm';

const UPLOAD_IMAGE = gql`
  mutation uploadImage($files: [File!]!) {
    uploadImage(files: $files) {
      publicUrl
    }
  }
`;

class UploadImage extends React.Component {
  static async handleFormSubmit(files: Array<File>): Promise<any> {
    return await uploadClient.mutate({
      mutation: UPLOAD_IMAGE,
      variables: { files },
    });
  }
  render(): HTMLDivElement {
    return <UploadForm onSubmit={UploadImage.handleFormSubmit} />;
  }
}

export default graphql(UPLOAD_IMAGE)(Page(UploadImage));
