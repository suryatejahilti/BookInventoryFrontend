import * as React from 'react';
import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, Modal, Paper } from '@mui/material';
import {useState, useEffect } from 'react';
import UpdateBook from '../apis/UpdateBooks';
import './editbook.css'
import DataContext from '../context/DataContext';
const EditBook=()=>{
    const {book,handleEditBook}=useContext(DataContext)
    const [editBookState,setEditBookState]=useState(false);
    useEffect(() => {
        setEditBookState(!editBookState);
      }, [book])
    if (book==null){
        book={
            bookid:'',
            title:'',
            author:'',
            price:'',
            quantity:'',
            description:''
        }
    }
    
    const [newBook,setNewBook]=  useState({
      bookid:book.bookid,
      title:book.title,
      author:book.author,
      price:book.price,
      quantity:book.quantity,
      description:book.description
  });
  
  const handleCancelChanges=()=>{
      const newbook={
        bookid:book.bookid,
      title:book.title,
      author:book.author,
      price:book.price,
      quantity:book.quantity,
      description:book.description
    }
    setNewBook(newbook);
  }
  const handleTitlechange=(title)=>{
    const newbook={
      bookid:book.bookid,
      title:title,
      author:book.author,
      price:book.price,
      quantity:book.quantity,
      description:book.description
    }
    setNewBook(newbook);
  }
  const handleAuthorchange=(author)=>{
    const newbook={
      bookid:book.bookid,
      title:book.title,
      author:author,
      price:book.price,
      quantity:book.quantity,
      description:book.description
    }
    setNewBook(newbook);
  }
  const handlePricechange=(price)=>{
    const newbook={
      bookid:book.bookid,
      title:book.title,
      author:book.author,
      price:price,
      quantity:book.quantity,
      description:book.description
    }
    setNewBook(newbook);
  }
  const handleQuantitychange=(quantity)=>{
    const newbook={
      bookid:book.bookid,
      title:book.title,
      author:book.author,
      price:book.price,
      quantity:quantity,
      description:book.description
    }
    setNewBook(newbook);
  }
  const handleDescchange=(description)=>{
    const newbook={
      bookid:book.bookid,
      title:book.title,
      author:book.author,
      price:book.price,
      quantity:book.quantity,
      description:description
    }
    setNewBook(newbook);
  }
  const handleUpadtedBook=(book)=>{
        console.log(book)
        const EditBook = async () => {
            try {
              const reponse = await UpdateBook(book)
            } catch (err) {
            }
          }
      
          EditBook()
          handleEditBook(null)
    }
    
  
    return (
        
    <Modal open={editBookState} onClose={()=>handleEditBook(null)}>
      <Paper className='editbookpaper' elevation={3}>
            <div><img className='bookimage' src='./booksicon.png'/></div>
            <div className='bookinput'>
            <InputBase
              placeholder="Title"
              required
              value={newBook.title}
              onChange={(e)=> handleTitlechange(e.target.value)}
              inputProps={{ 'aria-label': 'title' }}
            />
            <InputBase
              placeholder="Author"
              required
              value={newBook.author}
              onChange={(e)=> handleAuthorchange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
              placeholder="Price"
              value={newBook.price}
              type='number'
              onChange={(e)=> handlePricechange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
              placeholder="Quantity"
              value={newBook.quantity}
              type='number'
              onChange={(e)=> handleQuantitychange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
            className='descriptionBox'
              size='medium'
              placeholder="description"
              value={newBook.description}
              onChange={(e)=> handleDescchange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <div className='saveandcancel'>
            <Button   className='addbookbutton'  aria-label="add book" variant="contained" onClick={()=>handleUpadtedBook(newBook)}>
              Edit Book
            </Button>
            <Button   className='cancelchangesbutton'  aria-label="add book" variant="contained" onClick={()=>handleCancelChanges()}>
              Cancel Changes
            </Button>
            </div>
            </div>
        </Paper>

    </Modal>
    )
}
export default EditBook;