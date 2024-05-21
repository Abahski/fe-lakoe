import Api from "../../index";

export const getStore = async () => {
  return await Api.get("stores", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
