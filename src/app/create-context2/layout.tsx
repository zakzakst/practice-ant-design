import { UserProvider } from "./context/UserContext";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Layout;
