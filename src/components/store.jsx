import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "./ItemSlice";
import cartReducer from "./CartSlice";


const store = configureStore({
    reducer:{
        item:ItemReducer,
        cart:cartReducer
    }
})
export default store;