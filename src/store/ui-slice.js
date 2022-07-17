import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { 
        notification: {message: "", type: "", open: false}
    },
    reducers: {
        hideNotification: (state, action) => {
            state.notification = null;
        },
        showNotification: (state, action) => {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
            setTimeout(() => {
                uiActions.hideNotification();
            }, 3000);
        },
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;