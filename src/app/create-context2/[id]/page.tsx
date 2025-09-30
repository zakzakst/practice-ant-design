"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;

  return <div>{id}</div>;
};

export default Page;
