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
import {useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './card.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
  

const BookCard=({book})=> {
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

  const [expanded, setExpanded] = useState(false);;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='wow' sx={{ maxWidth: 400, maxHeight :400, minHeight:200, minWidth:400, margin:3 }} onClick={handleExpandClick}>
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
      <div className="expand">
       <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {book.desc}
          </Typography>
        </CardContent>
      </Collapse> 
      </div>
      {renderMenu}
    </Card>
    
  );
}
export default BookCard;