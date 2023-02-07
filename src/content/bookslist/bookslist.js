import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { getAllBooks } from "../../store/reducers/BooksSlice";
import { getGoogleBooks } from "../../store/reducers/GooglebooksSlice";
import { useState } from "react";
import BookCard from './card/card';

const BooksList =()=>{
    const books=useSelector(getGoogleBooks);
    console.log(books)
    //const [booker, setBooker] = useState([]);
    const booklist=[]
    for (var i=0;i<books.length;i++){
        const newbook={
            bookid:i,
            title:books[i].title,
            author:books[i].author,
            price:books[i].price,
            quantity:books[i].quantity,
            description:books[i].description
          }
            booklist.push(newbook);
    }
    return (
        <div>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 1, md: 0 }}>
            {booklist.map((book)=>(
            <Grid key={book.title} item>
                
              <BookCard sx={{
                  height: 140,
                  width: 100,}} book={book}/>
            </Grid>
            
            ))}

        </Grid>
        </div>

    )
}
export default BooksList;