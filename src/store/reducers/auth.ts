import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Credentials } from "../../types/auth";
import fakeAuth from "../../utils/fakeAuth";
import { removeItem, setItem } from "../../utils/persistanceStorage";

interface User {
  name?: string;
}

interface Auth {
  user: User;
  isAuth: boolean;
  error: string | null;
}

const initialState: Auth = {
  user: {},
  isAuth: !!localStorage.getItem("token"),
  error: null,
};

const { reducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: Auth, { payload }: PayloadAction<Credentials>) => {
      try {
        const token = fakeAuth(payload);
        setItem("token", token);
        state.isAuth = true;
        state.user.name = payload.login;
      } catch (error: any) {
        return {
          ...initialState,
          error,
        };
      }
    },
    logout: (state: Auth) => {
      removeItem("token");
      state.isAuth = true;
      return initialState;
    },
  },
});

const selectUser = (state: RootState) => state.auth.user;
const selectIsAuth = (state: RootState) => state.auth.isAuth;

export { selectUser, selectIsAuth };

export const { login, logout } = actions;
export default reducer;
