import { createSlice } from "@reduxjs/toolkit"
import GetGoogleBooks from "../../apis/GetGoogleBooks";
//import { setBooks } from "./BooksSlice";
import { setGoogleBooks } from "./GooglebooksSlice";

const initialState={

    search:'',
    

}
const SearchSlice = createSlice({
    name :'search',
    initialState,
    reducers:{

        setSearch:(state,action)=>{
            state.search=action.payload;

        }


    }

})
export const fetchGoogleBooks=(search)=> async dispatch =>{
    try {
        const response= await GetGoogleBooks(search);
        //console.log(response)
        dispatch(setGoogleBooks(response));
    }
    catch(e){}
}
export const getSearch = (state) => state.search.search;
export const { setSearch } = SearchSlice.actions
export default SearchSlice.reducer