"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const addressSchema = yup.object().shape({
  street: yup.string().required("住所は必須です"),
  city: yup.string().required("都市名は必須です"),
});

const schema = yup.object().shape({
  name: yup.string().required("名前は必須です"),
  email: yup
    .string()
    .email("有効なメールアドレスを入力してください")
    .required("メールアドレスは必須です"),
  address: addressSchema,
});

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // eslint-disable-next-line
  const onSubmit = (data: any) => {
    console.log("フォームデータ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">名前</label>
        <input id="name" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="street">住所 (街)</label>
        <input id="street" {...register("address.street")} />
        {errors.address?.street && <p>{errors.address.street.message}</p>}
      </div>

      <div>
        <label htmlFor="city">住所 (都市)</label>
        <input id="city" {...register("address.city")} />
        {errors.address?.city && <p>{errors.address.city.message}</p>}
      </div>

      <button type="submit">送信</button>
    </form>
  );
};

export default Form2;
