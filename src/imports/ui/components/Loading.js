import React from 'react';

export default ({ isLoading, error, pastDelay }: Props) => {
  if (isLoading) {
    return pastDelay ? <div>Loading...</div> : null; // Don't flash "Loading..." when we don't need to.
  } else if (error) {
    console.error(error);
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
};
