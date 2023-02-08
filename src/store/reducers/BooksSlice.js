import { createSlice } from "@reduxjs/toolkit";
import DeleteBook from "../../apis/DeleteBook";
import GetBooks from "../../apis/GetBooks";
import PostBook from "../../apis/PostBook";
import UpdateBook from "../../apis/UpdateBooks";
import { startLoading } from "./AuthSlice";

const initialState={
    books:[{
}],
    expanded:null,
    addBookState:false,
    editBook:null,


}

const BooksSlice = createSlice({
    name :'books',
    initialState,
    reducers:{
        setBooks:(state,action)=>{
           //console.log(action.payload)
            state.books=action.payload;
        },
        handleAddBookState:(state)=>{
            //console.log(state.addBookState,"addboookstate");
            const val=state.addBookState
            state.addBookState=!val;
        },
        handleExpandClick:(state,action)=>{
            state.expanded=action.payload
        },
        handleEditBookClick:(state,action)=>{
            state.expanded=null;
            state.editBook=action.payload
            //console.log(state.editBook)
        }
        


    }

})
export const getAllBooks = (state) => state.books.books;
export const getAddBookState = (state) => state.books.addBookState;
export const getExpanded = (state) => state.books.expanded;
export const getEditBook = (state) => state.books.editBook;
export default BooksSlice.reducer
export const {setBooks,handleAddBookState,handleExpandClick,handleEditBookClick} =BooksSlice.actions
export const fetchBooks=()=> async dispatch =>{
    dispatch(startLoading());
    try {
        const response= await GetBooks();
        //console.log(response)
        dispatch(setBooks(response));
    }
    catch(e){}
}
export const handleNewBook=(Book)=> async dispatch =>{
    dispatch(startLoading());
    try {
        const response= await PostBook(Book);
        //console.log(response)
        dispatch(fetchBooks());
    }
    catch(e){}
    
}
export const handleDeleteBook=(bookid)=> async dispatch =>{
    dispatch(startLoading());
    try {
        const response= await DeleteBook(bookid);
        //console.log(response)
        dispatch(fetchBooks());
    }
    catch(e){}
    
}
export const handleEditBook=(Book)=> async dispatch =>{
    dispatch(startLoading());
    try {
        const response= await UpdateBook(Book);
        console.log(response)
        dispatch(fetchBooks());
    }
    catch(e){}
    
}