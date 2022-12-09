import Bookslist from "./bookslist"

const content = ({books}) => {
    return (
        
        <main>
            {books.length ? (
                    <Bookslist books={books}/>
            ) : (
                <p>No Books Available</p>
            )
            } 


        </main>
    )
}
export default content;