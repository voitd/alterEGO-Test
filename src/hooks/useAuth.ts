import { getItem, removeItem, setItem } from "../utils/persistanceStorage";
import { useAppDispatch } from "../store";
import { login, logout } from "../store/reducers/auth";
import { Credentials } from "../types/auth";
import { useMemo } from "react";
import fakeAuth from "../utils/fakeAuth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = {
    login: "admin",
    password: "12345",
  };

  const isAuth: boolean = useMemo(() => !!getItem("token"), [getItem("token")]);

  const doLogin = async (user: Credentials) => {
    try {
      const randomUser = await fakeAuth();
      dispatch(login(randomUser));
      setItem("token", randomUser.token);
      return randomUser;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  const doLogout = () => {
    dispatch(logout());
    removeItem("token");
  };

  return { isAuth, user, doLogin, doLogout };
};

export default useAuth;
