import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart(state, action)
        {
            state.push(action.payload);
        },

        removeFromCart(state, action)
        {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        }   
    }
});

export const {addToCart, removeFromCart} = CartSlice.actions;

export default CartSlice.reducer;
