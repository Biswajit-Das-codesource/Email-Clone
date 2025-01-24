import { createSlice } from "@reduxjs/toolkit";

const Cardslicer = createSlice({
    name:"open",
    initialState:{
        value : false,
        allemails:[]
    },
    reducers:{
        open:(state,action)=>{
            state.value = action.payload
        },
        setemail:(state,action)=>{
            state.allemails=action.payload
        }
    }
})

export const {open,setemail} = Cardslicer.actions
export default Cardslicer.reducer