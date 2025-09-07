import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("名前は必須です"),
  age: yup.number().integer("年齢は整数でなければなりません").required("年齢は必須です"),
});

const data = {
  name: "山田太郎",
  age: 30,
};

schema
  .validate(data)
  .then(() => console.log("バリデーション成功"))
  .catch((e) => console.log("エラー：", e.errors));
