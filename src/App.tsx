import { createContext, useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import useAuth from "./hooks/useAuth";
import { Layout } from "./loyauts/Layout";
import MainRouter from "./routes/MainRouter";
import { selectUser } from "./store/reducers/auth";

export const AuthContext = createContext(null);

function App() {
  const { isAuth, doLogin, user } = useAuth();
  const userName = useSelector(selectUser).name;

  useEffect(() => {
    if (isAuth && !userName) doLogin(user);
  }, [isAuth, userName]);

  return (
    <Layout>
      <MainRouter />
    </Layout>
  );
}

export default App;
