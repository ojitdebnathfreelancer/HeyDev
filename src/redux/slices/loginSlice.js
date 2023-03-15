import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: '',
    password: '',
    error: '',
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginEmail: (state, action) => {
            state.email = action.payload
        },
        loginPassword: (state, action) => {
            state.password = action.payload
        },
        loginError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { loginEmail, loginPassword, loginError } = loginSlice.actions;

export default loginSlice.reducer;