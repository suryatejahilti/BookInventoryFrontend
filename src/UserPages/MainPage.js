import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import Content from '../sections/content/content'
import EditBook from '../components/editbook/editbook'
import ExpandedCard from '../components/expandedcard/expandedcard'
import PrimarySearchAppBar from '../sections/navbar/navbar'
import { fetchBooks, getAddBookState, getAllBooks, getEditBook, getExpanded } from '../store/reducers/BooksSlice'
import BookTable from '../components/booktable/booktable'
import ToggleNavBar from '../sections/navbar/togglenavbar'
import NewForm from '../sections/newbook/newform'
import { fetchGoogleBooks } from '../store/reducers/GooglebooksSlice'
import { getSearch } from '../store/reducers/SearchSlice'


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
               {addBookState && <NewForm handleBookState={handleBookState}/> }
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