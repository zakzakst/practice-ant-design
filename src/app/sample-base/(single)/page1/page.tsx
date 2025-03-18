// http://localhost:3000/practice-ant-design/sample-base/page1
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "タイトル",
  description: "概要",
};

const Page = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <p className="h-screen">spacer</p>
    </div>
  );
};

export default Page;
