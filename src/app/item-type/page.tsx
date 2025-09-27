import { Items } from "./components/Items";

type Fruits = "orange" | "banana";

const Page = () => {
  return (
    <>
      <Items<Fruits>
        items={[
          {
            value: "orange",
            label: "オレンジ",
          },
          {
            value: "banana",
            label: "バナナ",
          },
        ]}
      />
      <Items
        items={[
          {
            value: "rice",
            label: "お米",
          },
          {
            value: "bread",
            label: "パン",
          },
        ]}
      />
    </>
  );
};

export default Page;
