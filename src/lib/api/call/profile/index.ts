import Api from "../../index";

export const getProfile = async (token: string) => {
  return await Api.get("profiles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
