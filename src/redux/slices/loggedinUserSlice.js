import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loggedinUser: {},
    isLoading: true,
}

const loggedinUserSlice = createSlice({
    name: 'loogedin',
    initialState,
    reducers: {
        loggedin: (state, action) => {
            state.loggedinUser = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.loggedinUser = {}
        }
    }
});

export const { loggedin, logout } = loggedinUserSlice.actions;

export default loggedinUserSlice.reducer;