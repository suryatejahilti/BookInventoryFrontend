import BookCard from "./card"
import Grid from '@mui/material/Grid';

const BooksList =({books})=>{
    return (
        <div>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 1, md: 0 }}>
            
            {books.map((book)=>(
            <Grid key={book.id} item>
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