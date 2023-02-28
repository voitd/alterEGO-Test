import { createContext } from "react";
import "./App.css";
import { Layout } from "./loyauts/Layout";
import MainRouter from "./routes/MainRouter";

export const AuthContext = createContext(null);
function App() {
  return (
    <Layout>
      <MainRouter />
    </Layout>
  );
}

export default App;
