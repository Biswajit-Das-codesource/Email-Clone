import { createSlice } from "@reduxjs/toolkit";

const Cardslicer = createSlice({
    name:"open",
    initialState:{
        value : false,
        allemails:[],
        selectedmails:null,
        searchtext:"",
        user:null
    },
    reducers:{
        open:(state,action)=>{
            state.value = action.payload
        },
        setemail:(state,action)=>{
            state.allemails=action.payload
        },
        setselectedemail:(state,action)=>{
            state.selectedmails=action.payload
        },
        setsearchtext:(state,action)=>{
            state.searchtext=action.payload
        },
        setuser:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {open,setemail,setselectedemail,setsearchtext,setuser} = Cardslicer.actions
export default Cardslicer.reducer