import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface PriceState {
 meat: number;
 cheese: number;
 bacon: number;
 salad: number;
}

interface OrdersState {
    cheese: {
        name: string,
        quantity: number,
    };
    meat: {
        name: string,
        quantity: number,
    };
    bacon: {
        name: string,
        quantity: number,
    };
    salad: {
        name: string,
        quantity: number,
    };
    price: number;
}

interface IngredientsState {
    ingredients: string[];
    price: number;
    orders: OrdersState[];
}

const prices: PriceState = {
 meat: 2,
 cheese: 2.5,
 bacon: 1.5,
 salad: 2,
}

const initialState: IngredientsState = {
    ingredients: [],
    price: 2.00,
    orders: [],
}

const IngredientsSlice = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<string>) => {
            state.ingredients.push(action.payload);
            if(action.payload === "meat" || action.payload === "cheese" || action.payload === "bacon" || action.payload === "salad")
            state.price += +prices[action.payload];
        },
    
        removeIngredient: (state, action: PayloadAction<string>) => {
            if(action.payload === "meat" || action.payload === "cheese" || action.payload === "bacon" || action.payload === "salad")
            state.price -= +prices[action.payload];
            state.ingredients.splice(state.ingredients.lastIndexOf(action.payload), 1);
        },

        reset: (state) => {
            state.price = 2.00;
            state.ingredients = [];
        },

        newOrder: (state) => {
            let burger = state.ingredients, price = state.price
            state.orders.unshift({ 
                meat: {
                    name: "meat",
                    quantity: burger.filter((el) => el === "meat").length
                }, 
                salad: {
                    name: "salad",
                    quantity: burger.filter((el) => el === "salad").length
                }, 
                bacon: {
                    name: "bacon",
                    quantity: burger.filter((el) => el === "bacon").length
                }, 
                cheese: {
                    name: "cheese",
                    quantity: burger.filter((el) => el === "cheese").length
                }, 
                price: price 
            });
        }
    }
});

export const {addIngredient, removeIngredient, newOrder, reset}  = IngredientsSlice.actions;
export default IngredientsSlice.reducer;