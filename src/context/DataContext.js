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

    const handleSetAuth=(auth)=>{
          setAuth(auth);
    }
    const handleSetBooks=(books)=>{
          setBooks(books)
    }
    const handleExpandClick = (book) => {
        if (expanded==null){
          console.log(book);
          setExpanded(book[0])
        }
        else {
          setExpanded(null)
        }
        
      };
      const [editBook,setEditBook] = useState(null);

  const fetchBooks = async () => {
    try {
      const newbooklist = await GetBooks()
      setBooks(newbooklist);
    } catch (err) {
    }
  }

  const fetchGoogleBooks= async ()=>{
    if (search!=''){
    try {
      const newbooklist=await GetGoogleBooks(search)
      setBooks(newbooklist);
    }
    catch(err){

    }
  }
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  useEffect(()=>{
    fetchGoogleBooks();
  },[search])


  const handleEditBook =(book)=>{
    setExpanded(null)
    if (book==null){
      setEditBook(null)
    }
    else {
      setEditBook(book[0])
    }
    
  }

const handleNewBook=(book)=>{
  console.log(book)
  const AddBook = async () => {
    try {
      const newbooklist = await PostBook(book)
      fetchBooks();
      //setBooks(newbooklist);
    } catch (err) {
    }
  }

  AddBook();
  //const bookslist=[...books,book];
  //setBooks(bookslist);
}
const handleAddBookState=()=>{
        setExpanded(null);
      setaddBookState(!addBookState);
}
let contentstyle={
}
if (addBookState || expanded || editBook){
  contentstyle={
    filter:'blur(10px)',
    PointerEvent :'none'
}
}


    return (
        <DataContext.Provider value={{
            books, setBooks, search, setSearch, expanded, setExpanded, addBookState, setaddBookState,
             newBook, setNewBook, auth, setAuth, sess, setSess,
            handleExpandClick, contentstyle,
            handleNewBook, handleAddBookState, handleEditBook,
            handleSetBooks, handleSetAuth

        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;