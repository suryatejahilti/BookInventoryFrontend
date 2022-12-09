import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, Paper } from '@mui/material';
import {useState, useEffect } from 'react';
import './addbook.css'
const AddBook=(handleNewBook)=>{
    const [book,setBook]=  useState({
      id:'',
      title:'',
      author:'',
      price:'',
      quantity:'',
      desc:''
  });
  const handleTitlechange=(title)=>{
    const newbook={
      id:book.id,
      title:title,
      author:book.author,
      price:book.price,
      quantity:book.quantity,
      desc:book.desc
    }
    setBook(newbook);
  }
  const handleAuthorchange=(author)=>{
    const newbook={
      id:book.id,
      title:book.title,
      author:author,
      price:book.price,
      quantity:book.quantity,
      desc:book.desc
    }
    setBook(newbook);
  }
  const handlePricechange=(price)=>{
    const newbook={
      id:book.id,
      title:book.title,
      author:book.author,
      price:price,
      quantity:book.quantity,
      desc:book.desc
    }
    setBook(newbook);
  }
  const handleQuantitychange=(quantity)=>{
    const newbook={
      id:book.id,
      title:book.title,
      author:book.author,
      price:book.price,
      quantity:quantity,
      desc:book.desc
    }
    setBook(newbook);
  }
    return (
    <main>
      <Paper className='addbookpaper' elevation={3}>
            <div><img className='bookimage' src='./booksicon.png'/></div>
            <div className='bookinput'>
            <InputBase
              placeholder="Title"
              value={book.title}
              onChange={(e)=> handleTitlechange(e.target.value)}
              inputProps={{ 'aria-label': 'title' }}
            />
            <InputBase
              placeholder="Author"
              value={book.author}
              onChange={(e)=> handleAuthorchange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
              placeholder="Price"
              value={book.price}
              onChange={(e)=> handlePricechange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <InputBase
              placeholder="Quantity"
              value={book.quantity}
              onChange={(e)=> handleQuantitychange(e.target.value)}
              inputProps={{ 'aria-label': 'author' }}
            />
            <div className='saveandcancel'>
            <Button   className='addbookbutton'  aria-label="add book" variant="contained" onClick={()=>handleNewBook(book)}>
              Add Book
            </Button>
            <Button   className='cancelchangesbutton'  aria-label="add book" variant="contained">
              Cancel Changes
            </Button>
            </div>
            </div>
        </Paper>
    </main>
    )
}
export default AddBook;