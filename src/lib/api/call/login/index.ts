import Api from "../..";
import { ILogin } from "../../../../types/app";

export const loginApi = async (body: ILogin) => {
  return await Api.post("/auth/login", body);
};

export const loginStatus = async () => {
  return await Api.get("/auth/status", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
