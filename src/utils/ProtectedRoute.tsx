import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "./persistanceStorage";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const checkUserToken = () => {
    if (!getItem("token")) {
      setIsLoggedIn(false);
      return navigate("/");
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return <>{children}</>;
};
export default ProtectedRoute;
