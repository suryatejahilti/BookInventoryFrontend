import BookCard from "./card/card"
import Grid from '@mui/material/Grid';
import DataContext from "../../context/DataContext";
import { useContext } from "react";

const BooksList =()=>{
    const { books } = useContext(DataContext);
    return (
        <div>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 1, md: 0 }}>
            
            {books.map((book)=>(
            <Grid key={book.bookid} item>
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