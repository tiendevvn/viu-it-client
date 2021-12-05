export interface User {
  _id: string;
  createdAt: Date;
  student_id: string;
  name: string;
  birthday: string;
  email: string;
  phone_number: string;
  password: string;
  profile_picture: string;
  cover_photo: string;
  gender: string;
  bio: string;
  website: string;
  hometown: string;
  location: string;
  class_name: string;
  major: string;
  status: string;
  role: string;
  themes: string;
  languages: string;
  type: string;
  following: string[];
  followers: string[];
}

export interface UserState {
  token: string | null;
  isLogged: boolean;
  profile: User | null;
  user: User | null;
}

export enum UserActionTypes {
  SET_USER_DATA = "user/SET_USER_DATA",
  SIGNUP = "user/SIGNUP",
  SIGNIN = "user/SIGNIN",
}

export interface SetUserData {
  type: typeof UserActionTypes.SET_USER_DATA;
  payload: {
    isLogged: boolean;
    token: string;
    profile: User;
  };
}

export interface SignUp {
  type: typeof UserActionTypes.SIGNUP;
}

export interface SignIn {
  type: typeof UserActionTypes.SIGNIN;
  payload: {
    isLogged: boolean;
    token: string;
    profile: User;
  };
}

export type UserActions = SetUserData | SignUp | SignIn;
