import { combineReducers, configureStore } from "@reduxjs/toolkit";
import BookReducer from "./BooksSlice"
import AuthReducer from "./AuthSlice"
import SearchReducer from "./SearchSlice"

const reducer = combineReducers({
    BookReducer:BookReducer,
    AuthReducer:AuthReducer,
  })
export const store =configureStore({
    reducer:combineReducers({
        books:BookReducer,
        auth:AuthReducer,
        search: SearchReducer
      })
    
})