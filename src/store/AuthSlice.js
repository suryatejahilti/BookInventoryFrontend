import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";

const initialState={
    auth:null,
    isLoading:true
    

}

const AuthSlice = createSlice({
    name :'auth',
    initialState,
    reducers:{
        setAuth:(state,action)=>{
            state.auth=action.payload;
            window.localStorage.setItem("auth",JSON.stringify(action.payload))
            console.log(state.auth)
            state.isLoading=false;
        },
        startLoading:(state)=>{
            state.isLoading=true;
        }



    }

})


export const getAuth = (state) => state.auth.auth;
export const getisLoading = (state) => state.auth.isLoading;

export const { setAuth, startLoading } = AuthSlice.actions

export default AuthSlice.reducer