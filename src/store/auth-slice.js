import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggenIn: false },
    reducers: {
        login: (state, action) => {
            state.isLoggenIn = true;
        },
        logout: (state, action) => {
            state.isLoggenIn = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice;