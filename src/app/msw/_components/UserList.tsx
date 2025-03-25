"use client";
import { useEffect, useState } from "react";
import { fetchUsers, User } from "@/lib/api";

export const UserList = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>エラー：{error}</p>;
  if (!users) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
