"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useUser } from "../context/UserContext";

const Page = () => {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const { user, setUser } = useUser();

  useEffect(() => {
    setUser({
      id,
      name: "名前",
    });
  }, [id, setUser]);

  return <div>{JSON.stringify(user)}</div>;
};

export default Page;
