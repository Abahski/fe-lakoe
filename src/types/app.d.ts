export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  username: string;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
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
