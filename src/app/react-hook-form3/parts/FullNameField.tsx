import { useFormContext } from "react-hook-form";
import type { userFormValues } from "./schema";

export const FullNameField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<userFormValues>();

  return (
    <div>
      <label>氏名</label>
      <div>
        <input {...register("fullName.first")} placeholder="苗字" />
        {errors.fullName?.first && <p>{errors.fullName.first.message}</p>}
      </div>
      <div>
        <input {...register("fullName.last")} placeholder="名前" />
        {errors.fullName?.last && <p>{errors.fullName.last.message}</p>}
      </div>
    </div>
  );
};
