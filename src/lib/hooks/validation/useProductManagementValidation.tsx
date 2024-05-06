import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface IProductManagementForm {
    stock: number;
    sku?: number;
}

const TestFormSchema = yup.object({
    stock: yup
    .number()
    .required("Masukan stok produk minimal 1")
    .typeError("Masukan stok produk minimal 1")
    .min(1, "Masukan stok produk minimal 1"),
    sku: yup
    .number()
    .typeError("Masukkan angka")
})

const intialValue = {
    stock: 1,
}

const useProductManagementValidation = () => {
    return useForm<IProductManagementForm>({
        defaultValues: intialValue,
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(TestFormSchema)
    })
}

export default useProductManagementValidation;