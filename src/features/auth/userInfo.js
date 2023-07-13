import { createSlice } from "@reduxjs/toolkit";
import { clearAll, getCart, getUser, setUser } from "./localStorage";


const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {

    userInfo: getUser(),
    carts: getCart()
  },

  reducers: {

    addUserToLocal: (state, action) => {
      state.userInfo = action.payload;
      setUser(state.userInfo);

    },

    clearAlls: (state, action) => {
      state.userInfo = null;
      state.carts = [];
      clearAll();

    }

  }
});

export const { addUserToLocal, clearAlls } = userInfoSlice.actions;
export default userInfoSlice.reducer;