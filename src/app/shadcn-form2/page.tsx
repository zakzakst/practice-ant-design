"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

const userFormSchema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  age: z.coerce.number(),
});

type UserFormValues = z.infer<typeof userFormSchema>;

const UserFormDefaultValues: UserFormValues = {
  name: "",
  age: 20,
};

const formSchema = z.object({
  eventId: z.string(),
  users: z.array(userFormSchema),
});

type FormValues = z.infer<typeof formSchema>;

const FormDefaultValues: FormValues = {
  eventId: "",
  users: [],
};

const UserForm = ({
  onSubmit,
}: {
  onSubmit: (values: UserFormValues) => void;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: UserFormDefaultValues,
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
      <button onClick={handleSubmit(handleFormSubmit)}>
        ユーザーフォーム実行
      </button>
    </div>
  );
};

const Page = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    // formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: FormDefaultValues,
  });

  const users = watch("users");

  const onSubmitUserForm = (values: UserFormValues) => {
    // const users = getValues("users");
    console.log(users, values);
    setValue("users", [...users, values]);
  };

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <div>
      <Input id="eventId" {...register("eventId")} />
      <UserForm onSubmit={onSubmitUserForm} />
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
