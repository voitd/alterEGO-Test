// import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <main>
      <Nav />
      {/* <Outlet /> */}
      {children}
    </main>
  );
};
