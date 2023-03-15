import { configureStore } from "@reduxjs/toolkit";
import allUserSlice from "../slices/allUserSlice";
import landingPageSlice from "../slices/landingPageSlice";
import loggedinUserSlice from "../slices/loggedinUserSlice";
import loginSlice from "../slices/loginSlice";
import registationSlice from "../slices/registationSlice";

const store = configureStore({
    reducer: {
        home: landingPageSlice,
        user: allUserSlice,
        registaion: registationSlice,
        login: loginSlice,
        loggedin: loggedinUserSlice,
    }
})

export default store;