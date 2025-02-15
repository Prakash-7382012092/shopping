import { createSlice } from "@reduxjs/toolkit";
import ItemList from "./data";

const itemSlice = createSlice({
    name:"items",
    initialState:ItemList,
    reducers:{
        

    }
})

const ItemReducer = itemSlice.reducer;
export default ItemReducer;
