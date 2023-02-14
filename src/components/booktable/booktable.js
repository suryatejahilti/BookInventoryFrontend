import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter,
    StylesProvider
 } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, getAllBooks, handleDeleteBook, handleEditBookClick } from '../../store/reducers/BooksSlice';
import { selectedGridRowsCountSelector } from '@mui/x-data-grid';
import { red } from '@mui/material/colors';
import './booktable.css'
import { Box, Checkbox, checkboxClasses } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router';





const useStyles = makeStyles(theme => ({
  root: {
    display:"flex",
    flexDirection:"column",
    background: theme.background,
    border: 0,
    color: "white",
    height: 48,
    padding: "20px 10px"
  },
  toolbar:{
    backgroundColor:"black",
    color:"black",
    flexGrow:2
  },
  checkbox:{
    flexGrow:1
    //maxWidth:"100px"
  },
  bookinfo:{
    //minWidth:"500px",
    flexGrow:20
  },
  info:{
    flexGrow:5
  },
  tablebody:{
    flexDirection:"row"
  },
  row:{
    maxHeight:"5px",
  }
}));

const BookTable=()=> {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const books=useSelector(getAllBooks)
  const navigate=useNavigate();

  const handleSelectAllClick = (e) => {
    if (e.target.checked){
      //console.log(e)
      const newSelected = books.map((n) => n.bookId);
      setSelected(newSelected);
      //console.log(selected.length,books.length)
    }
    else {
    setSelected([]);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const isItemSelected=false;
  const handleRequestSort = () => {
    const isAsc = orderBy === "price" && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy("price");
  };
  const numSelected=2;
  const rowCount=2;

  const isSelected=(bookId)=>{
    return selected.includes(bookId)

  }
  const handleRowClick=(bookId)=>{
    //console.log(bookId)
    //console.log(selected)
    const selectedIndex = selected.indexOf(bookId);
    let newSelected= [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, bookId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }
  const handleDeleteClick=()=>{
    const deleter= async(bookId)=>{
      try{
        const response = await dispatch(handleDeleteBook(bookId))

      } catch (err){} 
    }
    for (var i=0;i<selected.length;i++){
        deleter(selected[i])
    }
    dispatch(fetchBooks(Response));
    navigate('/main')
    

  }
  const dispatch =useDispatch();
  const classes=useStyles();
  return (
    <StylesProvider injectFirst>
    <Box className={classes.root}>
      <Table  aria-label="simple table" >
        <TableHead >
        <TableRow data-testid="tableheader">
            <TableCell className={classes.checkbox}><Checkbox
              color="primary"
              indeterminate={selected.length<books.length && selected.length>0}
              checked={selected.length===books.length}
              onChange={handleSelectAllClick}
              
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            /></TableCell>
            <TableCell className="tableHeaderCell">Book Info</TableCell>
            <TableCell className="tableHeaderCell">Price</TableCell>
            <TableCell className="tableHeaderCell">Copies</TableCell>
            <TableCell className="tableHeaderCell">
              <DeleteIcon sx={{color:"black"}} onClick={()=>{handleDeleteClick()}}/>
              </TableCell>
          </TableRow>

        </TableHead>
        <TableBody className={classes.tablebody}>
          {books.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow className={classes.row} key={row.bookId} onClick={()=>handleRowClick(row.bookId)}  hover selected={isSelected(row.bookId)} >

              <TableCell className={classes.checkbox}>
              <Checkbox
                          color="primary"
                          checked={isSelected(row.bookId)}
                          inputProps={{
                            'aria-labelledby': books.bookId,
                          }}
                        />
              </TableCell>
              <TableCell className={classes.bookinfo}>
                  <Grid container>
                      <Grid item lg={2}>
                          <img alt={row.title} src='https://static-cse.canva.com/blob/921475/PinkandBlackGrungeCreativeWattpadBookCover.jpg' className="avatar"/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className="name">{row.title}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.author}</Typography>

                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell className={classes.info}>
                  <Typography color="primary" variant="subtitle2">{row.price}</Typography>
                </TableCell>
              <TableCell className={classes.info}>{row.quantity}</TableCell>
              <TableCell className={classes.info}>
                <EditIcon onClick={()=>{dispatch(handleEditBookClick(row))}}/>
                  {/* <Typography 
                    className="status"
                    style={{
                        backgroundColor: 
                        ((row.quantity>20 === 'Active' && 'green') ||
                        (row.quantity<10 && row.quantity>0 == 'Pending' && 'blue') ||
                        (row.quantity<0 === 'Blocked' && 'orange'))
                    }}
                  >available</Typography> */}
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/*
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={books.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />*/}
      </Table>
       
    </Box>
    </StylesProvider>








    // <TableContainer >
    //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
    //     <TableHead>
    //       <TableRow>
    //       <TableCell  style={{ width: 50 }}><Checkbox
    //           color="primary"
    //           indeterminate={numSelected > 0 && numSelected < rowCount}
    //           checked={rowCount > 0 && numSelected === rowCount}
              
    //           inputProps={{
    //             'aria-label': 'select all desserts',
    //           }}
    //         /></TableCell>
    //         <StyledTableCell>Dessert (100g serving)</StyledTableCell>
    //         <StyledTableCell align="right">Calories</StyledTableCell>
    //         <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
    //         <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
    //         <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {books.map((row) => (
    //         <StyledTableRow key={row.name}>
    //           <TableCell style={{ width: 50 }}>
    //            <Checkbox
    //                       color="primary"
    //                       checked={isItemSelected}
    //                       inputProps={{
    //                         'aria-labelledby': books.bookId,
    //                       }}
    //                     />
    //           </TableCell>
    //           <StyledTableCell component="th" scope="row">
    //             {row.title}
    //           </StyledTableCell>
    //           <StyledTableCell align="right">{row.bookId}</StyledTableCell>
    //           <StyledTableCell align="right">{row.price}</StyledTableCell>
    //           <StyledTableCell align="right">{row.author}</StyledTableCell>
    //           <StyledTableCell align="right">{row.quantity}</StyledTableCell>
    //         </StyledTableRow>
    //       ))}
    //     </TableBody>


    //   </Table>
    // </TableContainer>
  );
}




export default BookTable;