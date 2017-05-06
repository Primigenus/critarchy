// @flow

import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import uploadClient from '../../../data/uploadWithApollo';
import Page from '../../hocs/Page';
import UploadForm from '../UploadForm';
import DefaultHelmet from '../../components/DefaultHelmet';

const UPLOAD_IMAGE = gql`
  mutation uploadImage($files: [File!]!) {
    uploadImage(files: $files) {
      thumb_small
    }
  }
`;

class UploadImage extends React.Component {
  static async handleFormSubmit(files: FileList): Promise<{ data: { uploadImage: Array<mixed> } }> {
    return await uploadClient.mutate({
      mutation: UPLOAD_IMAGE,
      variables: { files },
    });
  }
  render() {
    return (
      <div>
        <DefaultHelmet>
          <title>Upload your art</title>
        </DefaultHelmet>
        <h1 className="title">
          Upload your art
        </h1>
        <p>Post art to your sketchbook!</p>
        <ul>
          <li>You can upload up to five pieces at once.</li>
          <li>Images should be less than 5MB in size.</li>
          <li>
            We'll show you previews before uploading and ask you for
            a title for each piece.
          </li>
        </ul>
        <UploadForm onSubmit={UploadImage.handleFormSubmit} />
      </div>
    );
  }
}

export default graphql(UPLOAD_IMAGE)(Page(UploadImage));
