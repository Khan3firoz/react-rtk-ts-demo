import { createSlice,PayloadAction } from '@reduxjs/toolkit'

type InitialState={
    numberOfCake:number
}
const initialState:InitialState={
    numberOfCake:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numberOfCake--
        },
        restocked:(state,action:PayloadAction<number>)=>{
            state.numberOfCake+=action.payload
        }
    }
})

export default cakeSlice.reducer;
export const {ordered,restocked} = cakeSlice.actions;