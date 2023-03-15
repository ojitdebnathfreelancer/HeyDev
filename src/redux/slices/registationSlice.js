import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

const registationSlice = createSlice({
    name: 'registaion',
    initialState,
    reducers: {
        firstName: (state, action) => {
            state.firstName = action.payload;
        },
        lastName: (state, action) => {
            state.lastName = action.payload;
        },
        email: (state, action) => {
            state.email = action.payload
        },
        password: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const { firstName, lastName, email, password } = registationSlice.actions;

export default registationSlice.reducer;