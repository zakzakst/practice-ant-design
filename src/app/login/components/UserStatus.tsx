"use client";

import { useUser } from "../context/UserContext";

export const UserStatus = () => {
  const { user, login, logout } = useUser();

  const handleLogin = () => {
    const dummyUser = {
      id: "123",
      name: "山田太郎",
      email: "taro@example.com",
    };
    login(dummyUser);
  };

  return (
    <div>
      {user ? (
        <>
          <p>こんにちは、{user.name}さん！</p>
          <button onClick={logout}>ログアウト</button>
        </>
      ) : (
        <>
          <p>ログインしていません</p>
          <button onClick={handleLogin}>ログイン</button>
        </>
      )}
    </div>
  );
};
