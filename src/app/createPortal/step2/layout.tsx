"use client";
import { ModalProvider } from "../context/ModalContext";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};

export default Layout;
