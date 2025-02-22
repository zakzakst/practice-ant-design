// Next.jsではSSR（サーバーサイドレンダリング）の関係で、documentが使えない場合があります。そこで、クライアント側でのみレンダリングするための仕組みとして、useEffectを利用してマウント後にポータルを生成するコンポーネントを用意します。
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

export const ClientOnlyPortal: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(children, globalThis?.document?.body);
};
