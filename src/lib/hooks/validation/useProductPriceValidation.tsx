import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface IProductPriceForm {
    price: number;
    minimum_buy?: number | null;
}

export const TestFormSchema = yup.object({
    price: yup
    .number()
    .required("Harga barang tidak boleh kosong atau 0")
    .typeError("Harga barang tidak boleh kosong atau 0")
    .moreThan(0, "Harga barang tidak boleh kosong atau 0"),
    minimum_buy: yup
    .number()
    .typeError("Minimal pembelian harus berupa angka")
    .nullable()
})



const useProductPriceValidation = () => {
    return useForm<IProductPriceForm>({
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(TestFormSchema)
    })
}

export default useProductPriceValidation;