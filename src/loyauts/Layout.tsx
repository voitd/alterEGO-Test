// import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children }: Props) => {
  return (
    <main>
      <Navigation />
      {/* <Outlet /> */}
      {children}
    </main>
  );
};
