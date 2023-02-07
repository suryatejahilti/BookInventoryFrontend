import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import Content from '../content/content'
import DataContext from '../context/DataContext'
import EditBook from '../editbok/editbook'
import ExpandedCard from '../expandedcard/expandedcard'
import PrimarySearchAppBar from '../navbar/navbar'
import AddBook from '../newbook/addbook'
import { fetchBooks, getAddBookState, getAllBooks, getEditBook, getExpanded } from '../store/reducers/BooksSlice'
import BookTable from '../booklist/booktable'
import { BookTableAdmin } from './booktableadmin'
import ToggleNavBar from '../navbar/togglenavbar'
import CrudNavBar from '../navbar/crudNavBar'
import { Route,Routes} from 'react-router'
import AddBookForm from '../newbook/addbookform'
import NewForm from '../newbook/newform'
import { fetchGoogleBooks } from '../store/reducers/GooglebooksSlice'
import { getSearch } from '../store/SearchSlice'


const Mainpage = () => {
    const expanded=useSelector(getExpanded)
    //const addBookState=useSelector(getAddBookState)
    const editBook=useSelector(getEditBook)
    const books=useSelector(getAllBooks)
    //const editBook =useSelector(getEditBook)
    const [bookState, setBookState] = useState(true);
    const [googleBooksState, setGoogleBooksState] = useState(false);
    const [addBookState, setAddBookState] = useState(false);
    //const [addBookState, setaddBookState] = useState(false);
    const search=useSelector(getSearch)
    const handleBookState=()=>{
      setAddBookState(false)
      setGoogleBooksState(false)
      setBookState(true)
    }
    const handleGoogleBooksState=()=>{
      setAddBookState(false)
      setBookState(false)
      setGoogleBooksState(true)
    }
    const handleAddBookState=()=>{
      setAddBookState(true)
      setGoogleBooksState(false)
      setBookState(false)
    }
    useEffect(() => {
      if(handleGoogleBooksState){
        fetchGoogleBooks();
      }
      else {
        fetchBooks();
      }

    }, [search]);
    return (
    <div>
        
        
        <PrimarySearchAppBar className='navbar'/> 
        <ToggleNavBar handleBookState={handleBookState} handleGoogleBooksState={handleGoogleBooksState} handleAddBookState={handleAddBookState}/>
        <div className='app'>
           <div className='content' >
               {bookState && books!=null&& <BookTable /> }
            </div>
            <div className='content' >
               {googleBooksState && <Content /> }
            </div>
            <div className='content' >
               {addBookState && <NewForm /> }
            </div>
            {/* <div className='wowbook' key='wowwbook'>
                <AddBook/>
                
            </div> */}
            <div className='expandedbook' key='expandedddbook'>
                {expanded && <ExpandedCard />} 
            </div>
            <div className='editbook' key='editedbook'>
                {editBook && <EditBook />}
            </div>
        </div>
        <div className='flex-grow-1'> 


      </div>
    </div>
  )
}

export default Mainpage