import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, {payload}) => {
            state.user = payload;
        },
        signUp: (state, {payload}) => {
            state.user = payload;
        },
        resetData: (state, {payload}) => {
            state.user = payload;
        },
        logOut: (state) => {
            state.user = null;
        }
    }
})

export const {logIn, signUp, logOut, resetData} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;