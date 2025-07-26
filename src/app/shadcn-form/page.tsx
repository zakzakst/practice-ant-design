"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const IMAGE_TYPES = ["image/jpg", "image/png"];
const MAX_IMAGE_SIZE = 5; // 5MB
const MOVIE_TYPES = ["mp4"];
const MAX_MOVIE_SIZE = 5;

// バイト単位のサイズをメガバイト単位に変換する
const sizeInMB = (sizeInBytes: number, decimalsNum = 2) => {
  const result = sizeInBytes / (1024 * 1024);
  return +result.toFixed(decimalsNum);
};

const schema = z.object({
  name: z.string().min(1, "名前を入力してください"),
  email: z.string().email("メールアドレスの形式で入力してください"),
  // input type="number" は入力されたあ低が string になるため、Zod 側で coerce を使って 文字列を数値に変換する
  age: z.coerce.number().min(18, "18歳以上である必要があります"),
  file: z
    // z.inferでSchemaを定義したときに型がつくようにするため
    .custom<FileList>()
    // 必須にしたい場合
    .refine((file) => file.length !== 0, { message: "必須です" })
    // このあとのrefine()で扱いやすくするために整形
    .transform((file) => file[0])
    // ファイルサイズを制限したい場合
    .refine((file) => sizeInMB(file.size) <= MAX_IMAGE_SIZE, {
      message: "ファイルサイズは最大5MBです",
    })
    // 画像形式を制限したい場合
    .refine((file) => IMAGE_TYPES.includes(file.type), {
      message: ".jpgもしくは.pngのみ可能です",
    }),
  movie: z
    .custom<FileList>()
    .refine((file) => file.length !== 0, { message: "必須です" })
    .transform((file) => file[0])
    .refine((file) => sizeInMB(file.size) <= MAX_MOVIE_SIZE, {
      message: "ファイルサイズは最大5MBです",
    })
    .refine((file) => MOVIE_TYPES.includes(file.type), {
      message: ".mp4のみ可能です",
    }),
});

type FormData = z.infer<typeof schema>;

const Page = () => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [moviePreviewUrls, setMoviePreviewUrls] = useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setPreviewUrls(urls);
    }
  };

  const onChangeMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setMoviePreviewUrls(urls);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="name">名前：</Label>
          <Input id="name" type="text" {...register("name")} />
        </div>
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="email">メール：</Label>
          <Input id="email" type="email" {...register("email")} />
        </div>
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="age">年齢：</Label>
          <Input id="age" type="number" {...register("age")} />
        </div>
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="file">画像：</Label>
          <Input
            id="file"
            type="file"
            accept="image/png, image/jpeg"
            {...register("file", { onChange: onChangeImage })}
          />
        </div>
        {errors.file && <p>{errors.file.message}</p>}
      </div>

      <div>
        {!!previewUrls.length &&
          previewUrls.map((url, index) => <img key={index} src={url} />)}
      </div>

      <div>
        <div className="grid grid-cols-[max-content_1fr] items-center gap-2">
          <Label htmlFor="movie">動画：</Label>
          <Input
            id="movie"
            type="file"
            accept="video/mp4"
            {...register("movie", { onChange: onChangeMovie })}
          />
        </div>
        {errors.movie && <p>{errors.movie.message}</p>}
      </div>

      <div>
        {!!moviePreviewUrls.length &&
          moviePreviewUrls.map((url, index) => (
            <video key={index} src={url} controls />
          ))}
      </div>

      <button onClick={handleSubmit(onSubmit)}>送信</button>
    </div>
  );
};

export default Page;
