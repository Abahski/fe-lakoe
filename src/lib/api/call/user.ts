import API from "..";

export const users = async () => {
  return await API.get("users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
