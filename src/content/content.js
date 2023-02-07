import Bookslist from "./bookslist/bookslist"
import DataContext from "../context/DataContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { getAllBooks } from "../store/reducers/BooksSlice";
import { getGoogleBooks } from "../store/reducers/GooglebooksSlice";

const Content = () => {
    const books=useSelector(getGoogleBooks);
    return (
        
        <main>
            {books!=null && books.length ? (
                    <Bookslist/>
            ) : (
                <p>No Books Available</p>
            )
            } 


        </main>
    )
}
export default Content;