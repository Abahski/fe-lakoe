import Api from "../..";

export const getInvoice = () => {
  return Api.get("invoices", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
