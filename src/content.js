import Bookslist from "./bookslist"

const content = ({books,handleExpandClick}) => {
    return (
        
        <main>
            {books.length ? (
                    <Bookslist books={books}  handleExpandClick={handleExpandClick}/>
            ) : (
                <p>No Books Available</p>
            )
            } 


        </main>
    )
}
export default content;