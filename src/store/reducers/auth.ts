import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { RootState } from "..";
import { ICredentials } from "../../types/auth";
import fakeAuth from "../../utils/fakeAuth";
import { setItem } from "../../utils/persistanceStorage";
// import { authApi } from "../../../services/auth";

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

// const { login } = authApi.endpoints;
//

const { reducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: IAuth, action: PayloadAction<ICredentials>) => {
      try {
        const token = fakeAuth(action.payload);
        setItem("token", token);
        state.isAuth = true;
        state.user.name = action.payload.login;
      } catch (error: any) {
        console.log("file: auth.ts~line: 44~error", error);
        return {
          ...initialState,
          error,
        };
      }
    },
    logout: () => initialState,
  } as SliceCaseReducers<IAuth>,
});

const selectUser = (state: RootState) => state.auth.user;
const selectAuth = (state: RootState) => state.auth;
export { selectUser, selectAuth };
export const { login, logout } = actions;
export default reducer;

// import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
//
// interface IPermission {}
//
// interface IState {
//     userPermissions: IPermission[];
// }
//
// export const initialState: IState = {
//     userPermissions: localStorage.getItem("token") ? [] : [],
// };
//
// export const permissionSlice = createSlice({
//     name: "permissions",
//     initialState,
//     reducers: {
//         addPermission: (state: IState, action: any) => {
//             state.userPermissions = action.payload;
//         },
//     } as SliceCaseReducers<IState>,
// });
//
// export const { addPermission } = permissionSlice.actions;
// export default permissionSlice.reducer;
