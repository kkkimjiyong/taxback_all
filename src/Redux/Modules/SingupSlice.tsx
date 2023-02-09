import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";

type TuserInfo = {
  name: string;
  phoneNumber: string;
  email: string;
  recommandId?: string;
};

type TinitialState = {
  userInfo: TuserInfo;
  isLoading?: boolean;
  error: string;
};

const initialState: TinitialState = {
  userInfo: {
    name: "",
    phoneNumber: "",
    email: "",
  },
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserInfo: (state, action: PayloadAction<TuserInfo>) => {
      state.userInfo = action.payload;
      console.log(state.userInfo);
      console.log({ ...state.userInfo, ...action.payload });
    },
  },
  extraReducers: {},
});

export const { addUserInfo } = userSlice.actions;
export default userSlice.reducer;
