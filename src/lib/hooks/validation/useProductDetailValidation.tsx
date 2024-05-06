import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface IProductDetailForm {
    nama_produk: string;
    url_produk: string;
}

const TestFormSchema = yup.object({
    nama_produk: yup
    .string()
    .required("Nama produk tidak boleh kosong"),
    url_produk: yup
    .string()
    .required("URL tidak boleh kosong")
})

const intialValue = {
    nama_produk: "",
    url_produk: "",
}

const useProductDetailValidation = () => {
    return useForm<IProductDetailForm>({
        defaultValues: intialValue,
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(TestFormSchema)
    })
}

export default useProductDetailValidation;