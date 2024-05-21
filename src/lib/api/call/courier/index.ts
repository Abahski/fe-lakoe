import Api from "../..";

export const getCourier = async () => {
  return await Api.get("courier", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const getCourierById = async (id: string) => {
  return await Api.get(`courier/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
