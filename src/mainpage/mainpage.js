import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import Content from '../content/content'
import DataContext from '../context/DataContext'
import EditBook from '../editbok/editbook'
import ExpandedCard from '../expandedcard/expandedcard'
import PrimarySearchAppBar from '../navbar/navbar'
import AddBook from '../newbook/addbook'
import { getAddBookState, getEditBook, getExpanded } from '../store/BooksSlice'

const Mainpage = () => {
    const expanded=useSelector(getExpanded)
    const addBookState=useSelector(getAddBookState)
    const editBook=null
    //const editBook =useSelector(getEditBook)
    let contentstyle={
    }
    if (addBookState || expanded || editBook){
      contentstyle={
        filter:'blur(10px)',
        PointerEvent :'none'
    }
    }

    return (
    <div>
        <PrimarySearchAppBar className='navbar'/>   
        <div className='app'>
            <div className='content' style={contentstyle}>
                <Content /> 
            </div> 
            <div className='wowbook' key='wowwbook'>
                <AddBook/>
                
            </div>
            <div className='expandedbook' key='expandedddbook'>
                {expanded && <ExpandedCard />} 
            </div>
            <div className='editbook' key='editedbook'>
                {editBook && <EditBook />}
            </div>
        </div>
    </div>
  )
}

export default Mainpage