import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button, IconButton, Menu, Modal, Paper } from '@mui/material';
import {useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DeleteBook } from '../apis/api';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './expandedcard.css'

const ExpandedCard =({book,handleEditBook,handleExpandClick})=>{
    const [expandedBookState,setExpandedBookState]=useState(false)
    useEffect(()=>{setExpandedBookState(!expandedBookState)},[book])
    const handleDeleteBook=(bookid)=>{
        console.log(bookid)
        const RemoveBook = async () => {
            try {
              const reponse = await DeleteBook(bookid)
            } catch (err) {
            }
          }
      
          RemoveBook()
          handleMenuClose()
          handleExpandClick(null)
    }

        const [anchorEl, setAnchorEl] = useState(null);
        const isMenuOpen = Boolean(anchorEl);
        const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
            };
        const handleMenuClose = () => {
                setAnchorEl(null);
             };
    const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id="menuID"
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={()=>{handleMenuClose();handleEditBook([book])}}>Edit Book</MenuItem>
          <MenuItem onClick={()=>handleDeleteBook(book.bookid)}>Delete Book</MenuItem>
        </Menu>
      );
    return (
        <Modal open={expandedBookState} onClose={()=>handleExpandClick(null)}>
          <Paper className='exapandedcard' elevation={3}>
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
            </Paper>
            
    
        </Modal>
       
        )
    }
export default ExpandedCard;