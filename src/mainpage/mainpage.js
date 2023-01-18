import React, { useEffect } from 'react'
import { useContext } from 'react'
import Content from '../content/content'
import DataContext from '../context/DataContext'
import EditBook from '../editbok/editbook'
import ExpandedCard from '../expandedcard/expandedcard'
import PrimarySearchAppBar from '../navbar/navbar'
import AddBook from '../newbook/addbook'

const Mainpage = () => {
    const {contentstyle, expanded, editBook, books, handleSetBooks} = useContext(DataContext)
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