import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import  PrimarySearchAppBar from'./navbar/navbar';
import {useState, useEffect } from 'react';
import Content from "./content/content"
import AddBook from "./newbook/addbook"
import './App.css'
import ExpandedCard from './expandedcard/expandedcard';
import EditBook from './editbok/editbook';
import LoginPage from './UserPages/LoginPage';
import SignUpPage from './UserPages/SignUpPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext';
import Mainpage from './mainpage/mainpage';
import Layoutpage from './layoutpage/layoutpage';
import RequireAuth from './Auth/requireauth';
import Unauthorized from './UserPages/Unauthorized';
const App=()=> {
  
  const ROLES ={
    user : "USER",
    admin : "ADMIN"
  }
  

  return (
    <StyledEngineProvider injectFirst> 
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layoutpage/>}>
            {/*</Routes><Route  path="/" element={<>}/>*/}
            <Route  path="/register" element={<SignUpPage/>}/>
            <Route  path="/login" element={<LoginPage/>}/>
            <Route path="/unauthorized" element={<Unauthorized/>}/>

            <Route element={<RequireAuth allowedRoles={[ROLES.user]}/>}>
              <Route  path="/main" element={<Mainpage/>}/>
            </Route>
          </Route>
        </Routes>
      </DataProvider>
    </Router>
    </StyledEngineProvider>
  
       
  );
}

export default App;
/*]
books.filter(book=>((book.title).toLowerCase()).includes(search.toLowerCase()))

]
*/