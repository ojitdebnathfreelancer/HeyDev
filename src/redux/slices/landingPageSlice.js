import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [],
    loading: false,
    isError: false,
    error: '',
}


export const getData = createAsyncThunk("home/getData", async () => {
    const res = await fetch('information.json')
    const data = await res.json()
    return data
})

const landingPageSlice = createSlice({
    name: 'home',
    initialState,
    extraReducers: builder => {
        builder.addCase(getData.pending, (state) => {
            state.loading = true;
            state.data = [];
            state.isError = false;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = '';
            console.log(action.payload);
        })
        builder.addCase(getData.rejected, (state, action) => {
            state.isError = true;
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default landingPageSlice.reducer;