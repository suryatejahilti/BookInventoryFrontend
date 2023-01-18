import Bookslist from "./bookslist/bookslist"
import DataContext from "../context/DataContext";
import { useContext } from "react";

const Content = () => {
    const { books } = useContext(DataContext);
    return (
        
        <main>
            {books.length ? (
                    <Bookslist/>
            ) : (
                <p>No Books Available</p>
            )
            } 


        </main>
    )
}
export default Content;