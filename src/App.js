import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';

import {useState, useEffect } from 'react';

import './App.css'

import LoginPage from './UserPages/LoginPage';
import SignUpPage from './UserPages/SignUpPage';
import { BrowserRouter as Router, Routes, Route, redirect, Navigate, useNavigate } from 'react-router-dom'
import Mainpage from './UserPages/MainPage';
import RequireAuth from './Auth/requireauth';
import Unauthorized from './UserPages/Unauthorized';
import { fetchBooks } from './store/reducers/BooksSlice';
import { useDispatch, useSelector } from 'react-redux';
import SimpleLayout from './layout/simple/SimpleLayout';
import { getAuth, setAuth } from './store/reducers/AuthSlice';

const App=()=> {
  const dispatch=useDispatch();
  const ROLES ={
    user : "USER",
    admin : "ADMIN"
  }
  
useEffect(() => {
  dispatch(fetchBooks());
  //console.log("books fetched")

}, []);
const ooo=false;
const auth=useSelector(getAuth);
useEffect(() => {
  if (localStorage.getItem("auth")!==null){
  //dispatch(setAuth(JSON.parse(localStorage.getItem("auth"))));
  }

}, []);



  return (
    <StyledEngineProvider injectFirst> 
    <Router>
        <Routes>
          <Route path="/" element={<SimpleLayout/>}>
            {/*</Routes><Route  path="/" element={<>}/>*/}
            <Route  path="/register" element={<SignUpPage/>}/>
            <Route  path="/login" element={<LoginPage/>}/>
            <Route path="/unauthorized" element={<Unauthorized/>}/>

            <Route element={<RequireAuth allowedRoles={[ROLES.user,ROLES.admin]}/>}>
              <Route  path="/main" element={<Mainpage/>}/>
            </Route>
          </Route>
        </Routes>
    </Router>
    </StyledEngineProvider>
  
       
  );
}

export default App;
/*]
books.filter(book=>((book.title).toLowerCase()).includes(search.toLowerCase()))

]
*/