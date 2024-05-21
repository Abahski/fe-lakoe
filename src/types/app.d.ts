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

export interface IOrder {
  prices: number;
  service_charge: number;
  status: StatusInvoice;
  receiver_longitude: number;
  receiver_latitude: number;
  receiver_district: string;
  receiver_phone: string;
  receiver_name: string;
  receiver_address: string;
  cart_id: number;
  userId: number;
}

export enum StatusInvoice {
  BELUM_DIBAYAR = "BELUM_DIBAYAR",
  PESANAN_BARU = "PESANAN_BARU",
  SIAP_DIKIRIM = "SIAP_DIKIRIM",
  DALAM_PENGIRIMAN = "DALAM_PENGIRIMAN",
  PESANAN_SELESAI = "PESANAN_SELESAI",
  DIBATALKAN = "DIBATALKAN",
}

export interface ICarts {
  price: number;
  discounts: number;
  user_id: number;
  store_id: number;
}
