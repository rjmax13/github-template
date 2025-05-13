import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },

  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity++;

      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (plant) => plant.name === item.name
      );
      if (existingItem) {
        state.items = state.items.filter((plant) => plant.name !== item.name);
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      console.log(name); // for debugging
      console.log(quantity); // for debugging

      const item = state.items.find((plant) => plant.name === name);

      if (item) {
        // state.items = state.items.filter((i) => i.name !== name);
        item.quantity = quantity;
        console.log(item.quantity);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
