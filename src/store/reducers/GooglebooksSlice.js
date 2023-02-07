import { createSlice } from "@reduxjs/toolkit"
import GetGoogleBooks from "../../apis/GetGoogleBooks";
import { setBooks } from "./BooksSlice";

const initialState={

    googlebooks:null,
    

}
const GoogleBooksSlice = createSlice({
    name :'googlebooks',
    initialState,
    reducers:{

        setGoogleBooks:(state,action)=>{
            state.googlebooks=action.payload;

        }


    }

})
export const fetchGoogleBooks=(search)=> async dispatch =>{
    try {
        const response= await GetGoogleBooks(search);
        console.log(response)
        dispatch(setGoogleBooks(response));
    }
    catch(e){}
}
export const getGoogleBooks = (state) => state.googlebooks.googlebooks;
export const { setGoogleBooks } = GoogleBooksSlice.actions
export default GoogleBooksSlice.reducer