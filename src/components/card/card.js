import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import IconButton from '@mui/material/IconButton';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState, useEffect, useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './card.css';
import { useDispatch } from 'react-redux';
import { handleEditBookClick, handleExpandClick } from '../../store/reducers/BooksSlice';
import { Box } from '@mui/material';


const BookCard=({book})=> {
  const dispatch=useDispatch();
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
    <MenuItem onClick={handleMenuClose}>Edit Book</MenuItem>
    <MenuItem onClick={handleMenuClose}>Delete Book</MenuItem>
  </Menu>
);

  
  return (
    <Card data-testid="bookCard" className='wow' sx={{ maxWidth: 400, maxHeight :400, minHeight:200, minWidth:400, margin:3 }} onClick={()=>dispatch(handleExpandClick(book))}>
      {/* <CardMedia align='left'
        component="img"
        height="194"
        image='/booksicon.png'
        alt={book.title}
      /> */}

      <img   src='http://books.google.com/books/publisher/content?id=_Nb4DAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73S2icZCRBKRuEfgxJirXZ0gXtzMchViOFirNq-ot3m5IONO16sZkP0t8ybbKY3Dy4mWwzABBFrX_mfq_H43dLP9x8xpFwfNpi0qTLdHVPGcfDCpz5IIBA2FOhpI0u1HJ8H5Wo0&source=gbs_api' className="bookimage"/>
      <div className="infoBox">
        <div className="titlebox">
        <h3>{book.title.slice(0,20)+"..."}</h3>
        <div className="editicon">
        <IconButton aria-label="settings" sx={{align:'top' }} onClick={handleProfileMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          </div>
          </div>
        <p>{book.author}</p>


      </div>
      {renderMenu}
    </Card>
    
  );
}
export default BookCard;