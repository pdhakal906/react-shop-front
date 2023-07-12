import { createSlice } from "@reduxjs/toolkit";
import { getCart, getUser, setUser } from "./localStorage";


const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {

    userInfo: getUser(),
    cart: getCart()
  },

  reducers: {

    addUserToLocal: (state, action) => {
      state.userInfo = action.payload;
      setUser(state.userInfo);

    }

  }
});

export const { addUserToLocal } = userInfoSlice.actions;
export default userInfoSlice.reducer;