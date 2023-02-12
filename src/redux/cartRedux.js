import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      
    },
    removeProduct: (state, action) => {
      const index = action.payload[0];
      const pro = action.payload[1];
      state.quantity = parseInt(action.payload[2]) - 1;
      state.products.splice(index, 1);
      state.total -= parseInt(pro.price) * parseInt(pro.quantity);
    },
    cartReset: (state) => {
      console.log("resett");
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, cartReset } = cartSlice.actions;
export default cartSlice.reducer;
