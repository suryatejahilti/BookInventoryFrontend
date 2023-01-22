import BookCard from "./card/card"
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";
import { getAllBooks } from "../../store/BooksSlice";

const BooksList =()=>{
    const books=useSelector(getAllBooks);
    return (
        <div>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 1, md: 0 }}>
            
            {books.map((book)=>(
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