import { createSlice,createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'
import  axios from 'axios'

type Users={
    id:number,
    name:string
}
type InitialState={
    loading:boolean,
    users:Users[],
    err:string
}
const initialState:InitialState={
    loading:false,
    users:[],
    err:""
}

// Genrated pending,fulfilled and rejected action type
export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.data)
})

const InitialState={
    
}
const usersSlice=createSlice({
    name:"user",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{ 
    builder.addCase(fetchUsers.pending,state=>{
        state.loading=true
    })

    builder.addCase(fetchUsers.fulfilled,(state,action:PayloadAction<Users[]>)=>{
        state.loading=false,
        state.users=action.payload, 
        state.err=''
    })

    builder.addCase(fetchUsers.rejected,(state,action)=>{
        state.loading=false,
        state.users=[]
        state.err=action.error.message||'Something went wrong'
    })
   }
})

export default usersSlice.reducer