import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
    isError: false,
    error: '',
}

export const getUsers = createAsyncThunk("home/getUsers", async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
})


const allUserSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        })
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isError = true;
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default allUserSlice.reducer;