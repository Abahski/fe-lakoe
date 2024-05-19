import { IRegister } from "../../../../types/app";
import Api from "../../index";

export const Register = async (body: IRegister) => {
  return await Api.post("/users/create", body);
};
