import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice"
import iceCreameReducer from "../features/iceCreame/iceCreameSlice"
import userReducer from "../features/users/userSlice"

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream:iceCreameReducer,
        users:userReducer
    },
})

export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch