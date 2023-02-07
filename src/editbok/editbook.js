import * as React from 'react';
import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, IconButton, Menu, Modal, Paper } from '@mui/material';
import {useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteBook from '../apis/DeleteBook';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../expandedcard/expandedcard.css'
import DataContext from '../context/DataContext';
import { getEditBook, getExpanded, handleEditBook, handleEditBookClick, handleExpandClick, handleNewBook } from '../store/reducers/BooksSlice';
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
  // const dispatch=useDispatch();
  // const expanded=useSelector(getExpanded)
  // const book=expanded;
  //   const [expandedBookState,setExpandedBookState]=useState(false)
  //   useEffect(()=>{setExpandedBookState(!expandedBookState)},[book])
  //   const handleDeleteBook=(bookid)=>{
  //       console.log(bookid)
  //       const RemoveBook = async () => {
  //           try {
  //             const reponse = await DeleteBook(bookid)
  //           } catch (err) {
  //           }
  //         }
      
  //         RemoveBook()
  //         handleMenuClose()
  //         handleExpandClick(null)
  //   }

  //       const [anchorEl, setAnchorEl] = useState(null);
  //       const isMenuOpen = Boolean(anchorEl);
  //       const handleProfileMenuOpen = (event) => {
  //       setAnchorEl(event.currentTarget);
  //           };
  //       const handleMenuClose = () => {
  //               setAnchorEl(null);
  //            };
  //   const renderMenu = (
  //       <Menu
  //         anchorEl={anchorEl}
  //         anchorOrigin={{
  //           vertical: 'top',
  //           horizontal: 'right',
  //         }}
  //         id="menuID"
  //         keepMounted
  //         transformOrigin={{
  //           vertical: 'top',
  //           horizontal: 'right',
  //         }}
  //         open={isMenuOpen}
  //         onClose={handleMenuClose}
  //       >
  //         <MenuItem onClick={()=>{handleMenuClose();dispatch(handleEditBookClick(book))}}>Edit Book</MenuItem>
  //         <MenuItem onClick={()=>dispatch(handleDeleteBook(book.bookid))}>Delete Book</MenuItem>
  //       </Menu>
  //     );
    return (
        <Modal open={book!=null} onClose={()=>dispatch(handleEditBookClick(null))}>
          {/* <Paper className='exapandedcard' elevation={3}>
                <div><img className='bookimage' src='./booksicon.png'/></div>
                <div className='bookinput'>
                <p>{book.title}</p>
                <p>{book.author}</p> 
                <p>{book.price}</p>
                <p>{book.quantity}</p>
                <IconButton aria-label="settings" sx={{align:'top' }} onClick={handleProfileMenuOpen}>
                        <MoreVertIcon />
                    </IconButton>
                <p>{book.desc}</p>
                </div>
                {renderMenu}
            </Paper> */}
            
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