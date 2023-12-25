import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice", // Used for internal purposes??
  initialState: {
    item: [],
    cost: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.item.push(action.payload);
      ++state.cost;
    },
    removeItem: (state) => {
      state.item.pop();
      --state.cost;
    },
    clearCart: (state) => {
      state.item.length = 0;
      // state.item.length = [] won't work for some reason
      state.cost = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

