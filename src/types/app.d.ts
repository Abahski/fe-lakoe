export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  username: string;
}

export interface IProfile {
  id: number;
  fullname?: string;
  phone_number?: string;
  location?: string;
  user: IUser;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  profile: IProfile;
}

export interface IAuthStatus {
  username: string;
  email: string;
  role_id: number;
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  attachments: string;
  is_active: boolean;
  minimum_order: number;
  size: string;
}

export interface ICategory {
  id?: number;
  name?: string;
  children?: ICategory[];
  children_category?: ICategory[];
}
