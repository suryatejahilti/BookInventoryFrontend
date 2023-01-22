import * as React from 'react';
import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, Modal, Paper } from '@mui/material';
import {useState, useEffect } from 'react';
import './addbook.css'
import DataContext from '../context/DataContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAddBookState, handleAddBookState, handleNewBook } from '../store/BooksSlice';
import PostBook from '../apis/PostBook';
const AddBook=()=>{
  const addBookState =useSelector(getAddBookState)
  const dispatch =useDispatch();
    const [book,setBook]=  useState({
      bookid:'',
      title:'',
      author:'',
      price:'',
      quantity:'',
      description:''
  });
  const handleCancelChanges=()=>{
      const newbook={
        bookid:'',
        title:'',
        author:'',
        price:'',
        quantity:'',
        description:''
    }
    setBook(newbook);
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
    setBook(newbook);
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
    setBook(newbook);
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
    setBook(newbook);
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
    setBook(newbook);
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
    setBook(newbook);
  }
  const handleAddBookStateNew= async (book)=>{
    dispatch(handleNewBook(book));
    dispatch(handleAddBookState());
    
  }
    return (
    <Modal open={addBookState} onClose={()=>dispatch(handleAddBookState())} closeAfterTransition>
      <Paper className='addbookpaper' elevation={3}>
            <div><img className='bookimage' src='./booksicon.png'/></div>
            <div className='bookinput'>
            <InputBase
              placeholder="Title"
              required
              value={book.title}
              onChange={(e)=> handleTitlechange(e.target.value)}
              inputProps={{ 'aria-label': 'title' }}
            />
            <InputBase
              placeholder="Author"
              required
              value={book.author}
              onChange={(e)=> handleAuthorchange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
              placeholder="Price"
              type='number'
              value={book.price}
              onChange={(e)=> handlePricechange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
              placeholder="Quantity"
              type='number'
              value={book.quantity}
              onChange={(e)=> handleQuantitychange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
            className='descriptionBox'
              size='medium'
              placeholder="description"
              value={book.description}
              onChange={(e)=> handleDescchange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <div className='saveandcancel'>
            <Button   className='addbookbutton'  aria-label="add book" variant="contained" onClick={()=>handleAddBookStateNew(book)}>
              Add Book
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
export default AddBook;