import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface IProductWeightForm {
    weight: number;
    long?: number;
    width?: number;
    height?: number;
}

const TestFormSchema = yup.object({
    weight: yup
    .number()
    .required("Masukan berat produk")
    .typeError("Berat barang tidak boleh kosong atau 0")
    .moreThan(0, "Berat barang tidak boleh kosong atau 0"),
    long: yup
    .number()
    .typeError("Panjang harus berupa angka"),
    width: yup
    .number()
    .typeError("Lebar harus berupa angka"),
    height: yup
    .number()
    .typeError("Tinggi harus berupa angka")

})

const intialValue = {
    weight: 1,
}

const useProductWeightValidation = () => {
    return useForm<IProductWeightForm>({
        defaultValues: intialValue,
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(TestFormSchema)
    })
}

export default useProductWeightValidation;