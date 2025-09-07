"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

const userFormSchema = z.object({
  name: z.string().min(1, "入力必須項目です"),
  age: z.coerce.number().min(1, "入力必須項目です"),
  // .refine((val) => !isNaN(Number(val)), { message: "入力必須項目です" }),
});

type UserFormValues = z.infer<typeof userFormSchema>;

const UserFormDefaultValues: UserFormValues = {
  name: "",
  age: 20,
};

const formSchema = z.object({
  eventId: z.string().min(1, "入力必須項目です"),
  users: z.array(userFormSchema).min(1, "一人以上のユーザーを登録してください"),
});

type FormValues = z.infer<typeof formSchema>;

const FormDefaultValues: FormValues = {
  eventId: "",
  users: [],
};

const UserForm = ({ onSubmit }: { onSubmit: (values: UserFormValues) => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: UserFormDefaultValues,
    // defaultValues: {
    //   name: "",
    // },
  });

  const handleFormSubmit = (values: UserFormValues) => {
    onSubmit(values);
    reset(); // フォームをクリア
  };

  // const onSubmit = (values: UserFormValues) => {
  //   console.log(values);
  // };

  // const onClickButton = () => {
  //   console.log("test");
  //   handleSubmit(onSubmit);
  // };

  return (
    <div>
      <Input id="name" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
      <Input id="age" type="number" {...register("age")} />
      {errors.age && <p>{errors.age.message}</p>}
      <button onClick={handleSubmit(handleFormSubmit)}>ユーザーフォーム実行</button>
    </div>
  );
};

const Page = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: FormDefaultValues,
  });

  const users = watch("users");

  const onSubmitUserForm = (values: UserFormValues) => {
    // const users = getValues("users");
    // バリデーションを実行するには trigger メソッドを使います
    // 例: trigger("users")
    console.log(users, values);
    setValue("users", [...users, values]);
    trigger("users");
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div>
      <Input id="eventId" {...register("eventId")} />
      {errors.eventId && <p>{errors.eventId.message}</p>}
      <UserForm onSubmit={onSubmitUserForm} />
      {errors.users && <p>{errors.users.message}</p>}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} / {user.age}
          </li>
        ))}
        {/* {getValues("users").map((user, index) => (
          <li key={index}>
            {user.name} / {user.age}
          </li>
        ))} */}
      </ul>
      <hr />
      <button onClick={handleSubmit(onSubmit)}>フォーム実行</button>
    </div>
  );
};

export default Page;
