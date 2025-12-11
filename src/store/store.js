import {configureStore} from "@reduxjs/toolkit";
import authResucer from "./slices/authSlice"
import popupReduser from "./slices/popUpSlice"
import userReducer from "./slices/userSlice"
export const store = configureStore({
    reducer:{
        auth:authResucer,
        popup:popupReduser,
        user:userReducer
    },
    
})