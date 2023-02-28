import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICredentials } from "../../types/auth";
import fakeAuth from "../../utils/fakeAuth";
import { removeItem, setItem } from "../../utils/persistanceStorage";

interface IUser {
  name?: string;
}

interface IAuth {
  user: IUser;
  isAuth: boolean;
  error: string | null;
}

const initialState: IAuth = {
  user: {},
  isAuth: !!localStorage.getItem("token"),
  error: null,
};

const { reducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state: IAuth, { payload }: PayloadAction<ICredentials>) => {
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
    logout: (state: IAuth) => {
      removeItem("token");
      console.log("logout");
      state.isAuth = false;
      return initialState;
    },
  },
});

const selectUser = (state: RootState) => state.auth.user;
const selectIsAuth = (state: RootState) => state.auth.isAuth;

export { selectUser, selectIsAuth };

export const { login, logout } = actions;
export default reducer;
