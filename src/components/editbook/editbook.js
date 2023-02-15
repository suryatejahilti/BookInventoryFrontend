import * as React from 'react';
import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, IconButton, Menu, Modal, Paper } from '@mui/material';
import {useState, useEffect } from 'react';
import '../expandedcard/expandedcard.css'
import { getEditBook, getExpanded, handleEditBook, handleEditBookClick, handleExpandClick, handleNewBook } from '../../store/reducers/BooksSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditBook =()=>{
  const book=useSelector(getEditBook)
  const[title,setTitle]=useState(book.title);
  const[author , setAuthor]=useState(book.author);
  const [description,setDescription]=useState(book.description);
  const[price,setPrice]=useState(book.price);
  const [copies,setCopies]=useState(book.quantity);
  const[displayWarning , setDisplayWarning]=useState(false);
  const[displaySuccess , setDisplaySuccess]=useState(false);
  const dispatch=useDispatch()
  
  const [expandedBookState,setExpandedBookState]=useState(false)
  async function submitNewBook(){
    
      if(title!=='' && author!=='' && description!=='' && copies>0 && price>0){
          const register= async()=>{
              try{
                const newbook={
                    bookId:book.bookId,
                    title:title,
                    author:author,
                    price:price,
                    quantity:copies,
                    description:description
                  }
                dispatch(handleEditBook(newbook));
    
              } catch (err){} 
            }
              register();
           
          setTitle('');
          setAuthor('');
          setDescription('');
          setPrice(0);
          setCopies(0);
          setDisplayWarning(false);
          setDisplaySuccess(true);
      }
      else{
          setDisplayWarning(true);
          setDisplaySuccess(false);
      }
  }
    return (
        <Modal open={book!=null} onClose={()=>dispatch(handleEditBookClick(null))}>
            
        <div className="container mt-5 mb-5">
            {
                displaySuccess &&
                <div className="alert alert-success" role='alert'>
                    Book added Successfully
                </div>
            }
            {
                displayWarning &&
                <div className="alert alert-danger" role='alert'>
                    All fields must be filled.
                </div>
            }
            <div className="card">
                <div className="card-header">
                    update  {book.title} 
                </div>
                <div className="card-body">
                    <form method='POST'>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Title</label>
                                <input type='text' className="form-control" name='title' required onChange={e => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label className="form-label">Author</label>
                                <input type='text' className="form-control" name='author' required onChange={ e => setAuthor(e.target.value)} value={author}/>
                            </div>
                        </div>
                        <div className='col-md-12 mb-3'>
                            <label className='form-label'>Description</label>
                            <textarea className='form-control' id='exampleFormControlTextarea1' rows={3} 
                                onChange={e => setDescription(e.target.value)} value={description}></textarea>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label className='form-label'>Copies</label>
                            <input type='number' className='form-control' name='Copies' required 
                                onChange={e => setCopies(Number(e.target.value))} value={copies}/>
                                <label className='form-label'>Price</label>
                                <input type='number' className='form-control' name='price' required 
                                onChange={e => setPrice(Number(e.target.value))} value={price}/>
                            <button type='button' className='btn main-color text-white mt-3 bg-dark' onClick={submitNewBook}>
                                Update Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            
    
        </Modal>
       
        )
    }
export default EditBook;