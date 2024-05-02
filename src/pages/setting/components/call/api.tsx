import axios from "axios";

const baseURL = "https://www.emsifa.com/api-wilayah-indonesia/api";

export const getProvinces = () => axios.get(`${baseURL}/provinces.json`);
export const getRegencies = (provinceId: string) =>
  axios.get(`${baseURL}/regencies/${provinceId}.json`);
export const getDistricts = (regencyId: string) =>
  axios.get(`${baseURL}/districts/${regencyId}.json`);
