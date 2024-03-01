import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup
    .string()
    .required("İsim Soyisim girmek zorunludur")
    .min(
      5,
      "Lütfen en az 5 karakterden oluşan bir isim soyisim bilgisi giriniz"
    )
    .max(20, "Lütfen maksimum 20 karakterden oluşan bir isim soyisim girin")
    .trim(),
  email: yup
    .string()
    .email("Geçerli bir email giriniz.")
    .required("Email girmek zorunludur"),
  message: yup
    .string()
    .min(10, "Lütfen en az 10 karakterden oluşan bir mesaj giriniz")
    .max(20, "Lütfen maksimum 20 karakterden oluşan bir mesaj girin")
    .trim()
    .required("Bir mesaj girmek zorunludur"),
});
