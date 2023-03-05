import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface User {
  username?: string;
  sex?: string;
  address?: string;
  name?: string;
  email?: string;
  birthday?: string;
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
    login: (state: Auth, { payload }: PayloadAction<User>) => {
      try {
        // setItem("token", token);
        state.isAuth = true;
        state.user = payload;
      } catch (error: any) {
        return {
          ...initialState,
          error,
        };
      }
    },
    logout: (state: Auth) => {
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
