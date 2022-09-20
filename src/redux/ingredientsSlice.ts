import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface PriceState {
 meat: number;
 cheese: number;
 bacon: number;
 salad: number;
}

interface IngredientsState {
    ingredients: string[];
    price: number;
}

const prices: PriceState = {
 meat: 2,
 cheese: 2.5,
 bacon: 1.5,
 salad: 2,
}

const initialState: IngredientsState = {
    ingredients: [],
    price: 2.00
}

const IngredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<string>) => {
            state.ingredients.push(action.payload);
            if(action.payload === "meat" || action.payload === "cheese" || action.payload === "bacon" || action.payload === "salad")
            state.price += +prices[action.payload].toFixed(2);
        },
    
        removeIngredient: (state, action: PayloadAction<string>) => {
            if(action.payload === "meat" || action.payload === "cheese" || action.payload === "bacon" || action.payload === "salad")
            state.price -= +prices[action.payload].toFixed(2);
            state.ingredients.splice(state.ingredients.lastIndexOf(action.payload), 1);
        }
    }
});

export const {addIngredient, removeIngredient}  = IngredientsSlice.actions;
export default IngredientsSlice.reducer;