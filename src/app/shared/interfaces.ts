export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FireBase {
  idToken: string;
  expiresIn: string;
}