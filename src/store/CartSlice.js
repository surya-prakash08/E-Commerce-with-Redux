import {createSlice} from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';
const initialState=[];
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state, action){
            // state.push(action.payload);
            state.push({ ...action.payload, cartItemId: uuidv4() });
        },
        remove(state,action){
            // return state.filter(item=>item.id !== action.payload)
           return state.filter((item) => item.cartItemId !== action.payload);
        }
    }
});
export const {add, remove}= cartSlice.actions;
export default cartSlice.reducer;

