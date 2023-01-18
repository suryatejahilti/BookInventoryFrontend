import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import  PrimarySearchAppBar from'./navbar';
import {useState, useEffect } from 'react';
import Content from "./content"
import AddBook from "./newbook/addbook"
import './App.css'
import ExpandedCard from './expandedcard/expandedcard';
import EditBook from './editbok/editbook';
import {GetBooks,PostBook,UpdateBook,DeleteBook,GetGoogleBooks} from './apis/api';
const App=()=> {
  const [books,setBooks] = useState([]);//pull from local storage
  const [addBookState,setaddBookState]= useState(false);
  const [newBook, setNewBook] = useState('');
  const [search,setSearch]= useState('');
  const [expanded, setExpanded] = useState(null);
  const [editBook,setEditBook] = useState(null);
  
 
  //useEffect(setBooks(GetBooks()),[])

  const fetchBooks = async () => {
    try {
      const newbooklist = await GetBooks()
      setBooks(newbooklist);
    } catch (err) {
    }
  }

  const fetchGoogleBooks= async ()=>{
    if (search!=''){
    try {
      const newbooklist=await GetGoogleBooks(search)
      setBooks(newbooklist);
    }
    catch(err){

    }
  }
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  useEffect(()=>{
    fetchGoogleBooks();
  },[search])

  const handleExpandClick = (book) => {
    if (expanded==null){
      console.log(book);
      setExpanded(book[0])
    }
    else {
      setExpanded(null)
    }
    
    //console.log(expanded);
    
  };
  const handleEditBook =(book)=>{
    setExpanded(null)
    if (book==null){
      setEditBook(null)
    }
    else {
      setEditBook(book[0])
    }
    
  }

const handleNewBook=(book)=>{
  console.log(book)
  const AddBook = async () => {
    try {
      const newbooklist = await PostBook(book)
      fetchBooks();
      //setBooks(newbooklist);
    } catch (err) {
    }
  }

  AddBook();
  //const bookslist=[...books,book];
  //setBooks(bookslist);
}
const handleAddBookState=()=>{
        setExpanded(null);
      setaddBookState(!addBookState);
}
let contentstyle={
}
if (addBookState || expanded || editBook){
  contentstyle={
    filter:'blur(10px)',
    PointerEvent :'none'
}
}
//handleExpandClick(book);

  return (
    <StyledEngineProvider injectFirst> 
    {//<h1>{books.length}</h1>
    }
    <PrimarySearchAppBar className='navbar' search={search} setSearch={setSearch} handleAddBookState={handleAddBookState}/>
     <div className='app'>
      
          <div className='content' style={contentstyle}>
          <Content   books={books} handleExpandClick={handleExpandClick} /> 
          </div> 
          <div className='wowbook' key='wowwbook'>
          <AddBook addBookState={addBookState} handleNewBook={handleNewBook} handleAddBookState={handleAddBookState}/>
        </div>
        <div className='expandedbook' key='expandedddbook'>
          {expanded && <ExpandedCard book={expanded} handleEditBook={handleEditBook} handleExpandClick={handleExpandClick} />}
          
        
        </div>
        <div className='editbook' key='editedbook'>
        {editBook && <EditBook book={editBook} handleEditBook={handleEditBook} />}
          
        
        </div>
        
        </div>
        
    </StyledEngineProvider>
       
  );
}

export default App;
/*]
books.filter(book=>((book.title).toLowerCase()).includes(search.toLowerCase()))
[{
  id:1,
  title:"Sapiens",
  author:"yuval noah hariari",
  price:"292",
  quantity:35,
  desc:"What does it mean to be human? In a sweeping narrative spanning two and half million years of human evolution, Israeli historian Yuval Noah Harari weaves insights from science and the humanities together to answer to what it means to be human."
},
{
  id:2,
  title:"The Alchemist",
  author:"paulo coelho",
  price:"297",
  quantity:5,
  desc:"The Alchemist is a classic novel in which a boy named Santiago embarks on a journey seeking treasure in the Egyptian pyramids after having a recurring dream about it and on the way meets mentors, falls in love, and most importantly, learns the true importance of who he is and how to improve himself and focus on what really matters in life."
},
{
  id:3,
  title:"The Monk Who Sold his Ferrari",
  author:"Robin Sharma",
  price:"179",
  quantity:95,
  desc:"The Monk Who Sold His Ferrari tells the extraordinary story of Julian Mantle, a lawyer forced to confront the spiritual crisis of his out-of-balance life, and the subsequent wisdom that he gains on a life-changing odyssey that enables him to create a life of passion, purpose and peace."
},
{
  id:4,
  title:"Concepts of Physics",
  author:"H.C verma",
  price:"352",
  quantity:28,
  desc:"H C Verma's Concepts Of Physics is an all-inclusive book, which serves to detail out the ABC of physics in an intricate manner making it an ideal book for not only the higher secondary students, but also for those who are preparing for their competitive examinations."
}
]
*/