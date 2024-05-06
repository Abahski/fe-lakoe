import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export interface IProductImageFormValues {
    images: FileList;
}

const ImageFormSchema = yup.object({
    images: yup
      .array()
      .min(1, 'Minimal satu gambar harus diunggah')
      .of(
        yup
          .mixed()
          .test(
            'fileSize',
            'Ukuran gambar terlalu besar, maksimal 5MB',
            (value) => !value || (value && value[0].size <= 5 * 1024 * 1024)
          )
          .test(
            'fileType',
            'Format gambar harus jpeg atau png',
            (value) =>
              !value ||
              (value && ['image/jpeg', 'image/png'].includes(value[0].type))
          )
      ),
  });
  
  const intialValues = {
      images: new FileList
  }
  
  export const useProductImageValidation = () => {
    return useForm<IProductImageFormValues>({
      defaultValues: intialValues,
      mode: 'all',
      reValidateMode: 'onChange',
      resolver: yupResolver(ImageFormSchema) as any,
    });
  };