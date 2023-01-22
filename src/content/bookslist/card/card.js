import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useState, useEffect, useContext } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './card.css';
import ExpandedCard from '../../../expandedcard/expandedcard';
import DataContext from '../../../context/DataContext';
import { useDispatch } from 'react-redux';
import { handleExpandClick } from '../../../store/BooksSlice';


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
    <Card className='wow' sx={{ maxWidth: 400, maxHeight :400, minHeight:200, minWidth:400, margin:3 }} onClick={()=>dispatch(handleExpandClick(book))}>
      <CardMedia align='left'
        component="img"
        height="194"
        image='/booksicon.png'
        alt={book.title}
      />
      <div className="infoBox">
        <div className="titlebox">
        <h3>{book.title}</h3>
        <div className="editicon">
        <IconButton aria-label="settings" sx={{align:'top' }} onClick={handleProfileMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          </div>
          </div>
        <p>{book.author}</p>
        <p>₹ {book.price}/-</p>
        <p>{book.quantity} Copies Available</p>


      </div>
      {renderMenu}
    </Card>
    
  );
}
export default BookCard;