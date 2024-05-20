import Api from "../../index";

export const getCart = async () => {
  return await Api.get("carts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
