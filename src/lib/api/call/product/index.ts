import Api from "../../index";

export const getProduct = async () => {
  return await Api.get("products", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
