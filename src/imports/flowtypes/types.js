export type Image = { thumb_large: ?string, thumb_small: ?string };

export type Artwork = {
  image: $Shape<Image>,
  alt?: string,
  size?: string,
};

// UserPicture
type Picture = {
  picture: string,
  size?: string,
};

export type FacebookIdentity = {
  email: string,
  first_name: string,
  name: string,
};
export type GoogleIdentity = {
  email: string,
  given_name: string,
  name: string,
};
export type User = {
  _id: string,
  createdAt: Date,
  name: string,
  picture: string,
  services: Array<FacebookIdentity | GoogleIdentity>,
};
