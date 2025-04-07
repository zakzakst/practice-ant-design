import { ReactNode } from "react";
import { UserProvider } from "./context/UserContext";

const Layout = ({ children }: { children: ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Layout;
