import { configureStore } from "@reduxjs/toolkit";
import CartSystem from './cardSlice'

const store = configureStore({

    reducer:{
        Mycart:CartSystem
    }
})

export default store
