import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState:{
        make: "Make",
        model: "Model",
        price: "Price",
        year: "Year",
    },
    reducers:{
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseYear: (state, action) => { state.year = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, choosePrice, chooseYear} = rootSlice.actions