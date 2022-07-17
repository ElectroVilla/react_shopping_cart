import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        cart: [],
        totalQuantity: 0,
        totalPrice: 0,
        totalItems: 0,
        showCart: false,
        changed: false
    },
    reducers: {
        replaceData: (state, action) => {
            state.totalQuantity = action.payload.totalQuantity;
            state.cart = action.payload.cart;
            state.cart.map(item => {
                state.totalPrice += item.totalPrice;
                state.totalItems += item.quantity;
                return item;
            });
        },
        addToCart: (state, action) => {
            state.changed = true;
            const newItem = action.payload;
            const existingItems = state.cart.find((item) => item.id === newItem.id);
            /* Product have: id, price, quantity, totalPrice, name */
            if (existingItems) {
                existingItems.quantity += 1;
                existingItems.totalPrice += newItem.price;
            } else {
                state.cart.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                state.totalQuantity += 1;
            }
            state.totalItems += 1;
            state.totalPrice += newItem.price;
        },
        removeFromCart: (state, action) => {
            state.changed = true;
            const id = action.payload;
            const existingItems = state.cart.findIndex(item => item.id === id);
            if (existingItems !== -1) {
                if(state.cart[existingItems].quantity > 1) {
                    state.cart[existingItems].quantity -= 1;
                    state.cart[existingItems].totalPrice -= state.cart[existingItems].price;
                    state.totalItems -= 1;
                    state.totalPrice -= state.cart[existingItems].price;
                } else {
                    state.totalQuantity -= 1;
                    state.totalPrice -= state.cart[existingItems].price;
                    state.totalItems -= 1;
                    state.cart.splice(existingItems, 1);
                }
            }
        },
        setShowCart: (state, action) => {
            state.showCart = !state.showCart;
        }
    }
});
      
export const cartActions = cartSlice.actions;
export default cartSlice;