export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FireBase {
  idToken: string;
  expiresIn: string;
}

export interface Post {
  id?: string;
  title: string;
  epigraph?: string;
  text: string;
  author: string;
  createdOn: Date;
  updatedOn: Date;
  avatar?: string;
  image?: string;
  preview?: string;
  deleted?: boolean;

}

export interface FireCreateResponse {
  name: string;
}
