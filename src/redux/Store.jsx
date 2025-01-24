import { configureStore } from "@reduxjs/toolkit";
import Cardslicer from "./Slicer";

const appstore= configureStore({
    reducer:{
        app:Cardslicer
    }
})


export default appstore;