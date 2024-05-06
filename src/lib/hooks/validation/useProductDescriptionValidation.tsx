import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface IProductDetailFormValues {
    description: string;
}



const TestFormSchema = yup.object({
    description: yup
    .string()
    .required("Masukkan deskripsi produk")
    .typeError("Masukkan deskripsi produk")
    .max(3000, "Maksimal deskripsi adalah 3000 karakter")
})

const intialValue = {
    description: ""
}

const useProductDescriptionValidation = () => {
    return useForm<IProductDetailFormValues>({
        defaultValues: intialValue,
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(TestFormSchema)
    })
}

export default useProductDescriptionValidation;

