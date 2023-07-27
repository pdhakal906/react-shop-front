import { createSlice } from "@reduxjs/toolkit";
import { clearAll, getCart, getUser, setCart, setUser } from "./localStorage";






export const userInfoSlice = createSlice({
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


    addToCart: (state, action) => {
      const isExist = state.carts.find((cart) => cart.product === action.payload.product);

      if (isExist) {
        state.carts = state.carts.map((cart) => cart.product === isExist.product ? action.payload : cart);
        setCart(state.carts);

      } else {
        state.carts.push(action.payload);
        setCart(state.carts);
      }

    },

    removeFromCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      setCart(state.carts);

    },


    clearAlls: (state, action) => {
      state.userInfo = null;
      state.carts = [];
      clearAll();

    }

  }
});



export const { addUserToLocal, clearAlls, addToCart, removeFromCart } = userInfoSlice.actions;
export default userInfoSlice.reducer;