import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(quantity, 1);
      }
    },
    delItem: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addItem, updateQuantity, delItem } = cartSlice.actions;
export default cartSlice.reducer;
