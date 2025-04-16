"use client";

import { useForm, useWatch } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
};

const Page = () => {
  const { control, handleSubmit, register } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("フォーム送信", data);
  };

  const watchedFirstName = useWatch({
    control,
    name: "firstName",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input {...register("firstName")} />
      </div>
      <div>
        <label>Last Name:</label>
        <input {...register("lastName")} />
      </div>
      <p>watched First Name: {watchedFirstName}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
