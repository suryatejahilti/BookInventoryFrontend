import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BookReducer from "./reducers/BooksSlice"
import AuthReducer from "./reducers/AuthSlice"
import SearchReducer from "./SearchSlice"
import GoogleBooksReducer from "./GooglebooksSlice"

const reducer = combineReducers({
    BookReducer:BookReducer,
    AuthReducer:AuthReducer,
  })
export const store =configureStore({
    reducer:combineReducers({
        books:BookReducer,
        auth:AuthReducer,
        search: SearchReducer,
        googlebooks:GoogleBooksReducer
      })
    
})