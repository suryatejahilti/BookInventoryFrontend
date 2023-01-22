import { createContext, useState, useEffect } from 'react';
import GetBooks from '../apis/GetBooks';
import GetGoogleBooks from '../apis/GetGoogleBooks';
import PostBook from '../apis/PostBook';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [books,setBooks] = useState([]);
    const [expanded, setExpanded] = useState(null);
    const [addBookState,setaddBookState]= useState(false);
    const [newBook, setNewBook] = useState('');
    const [search,setSearch]= useState('');
    const [auth, setAuth] = useState(null);
    const [sess,setSess] =useState(false);













    return (
        <DataContext.Provider value={{
            books, setBooks, search, setSearch, expanded, setExpanded, addBookState, setaddBookState,
             newBook, setNewBook, auth, setAuth, sess, setSess,

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;