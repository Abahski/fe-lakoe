import Api from "../..";

export const getCategory = async () => {
  return await Api.get("categories", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
