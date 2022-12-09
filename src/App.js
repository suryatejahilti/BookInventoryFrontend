import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import  PrimarySearchAppBar from'./navbar';
import {useState, useEffect } from 'react';
import Content from "./content"
import AddBook from "./newbook/addbook"
const App=()=> {
  const [books,setBooks] = useState([{
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
]);//pull from local storage
  const [newBook, setNewBook] = useState('');
  const [search,setSearch]= useState('');

const handleNewBook=(book)=>{
  const bookslist=[...books,book];
  setBooks(bookslist);
}

  return (
    <StyledEngineProvider injectFirst> 
    <h1>{books.length}</h1>
        {/* <PrimarySearchAppBar search={search} setSearch={setSearch}/>
          <Content books={books.filter(book=>((book.title).toLowerCase()).includes(search.toLowerCase()))}/> */}
        <AddBook handleNewBook={handleNewBook}/>
        
    </StyledEngineProvider>
       
  );
}

export default App;
