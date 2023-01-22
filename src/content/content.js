import Bookslist from "./bookslist/bookslist"
import DataContext from "../context/DataContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { getAllBooks } from "../store/BooksSlice";

const Content = () => {
    const books=useSelector(getAllBooks);
    return (
        
        <main>
            {books && books.length ? (
                    <Bookslist/>
            ) : (
                <p>No Books Available</p>
            )
            } 


        </main>
    )
}
export default Content;