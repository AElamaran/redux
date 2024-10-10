import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './Slice/customerSlice'

export const Store = configureStore({
    devTools:false,
    //if u want to active dev tools change it as true  
    reducer:{
        customer:customerReducer

    }
})

export default Store