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
import { fetchBooks } from './store/BooksSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { axiosPrivate } from './apis/axios';


const App=()=> {
  const dispatch=useDispatch();
  const ROLES ={
    user : "USER",
    admin : "ADMIN"
  }

//   const requestIntercept = axiosPrivate.interceptors.request.use(
//     config => {
//         if (!config.headers['Authorization']) {
//             config.headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('auth')).accessToken}`;
//         }
//         return config;
//     }, (error) => Promise.reject(error)
// );

// const responseIntercept = axiosPrivate.interceptors.response.use(
//     response => response,
//     async (error) => {
//         const prevRequest = error?.config;
//         if (error?.response?.status === 403 && !prevRequest?.sent) {
//             prevRequest.sent = true;
//             //const newAccessToken = await refresh();
//             prevRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('auth').accessToken}`;
//             return axiosPrivate(prevRequest);
//         }
//         return Promise.reject(error);
//     }
// );
  
useEffect(() => {
  dispatch(fetchBooks());
  //console.log("books fetched")

}, []);


  return (
    <StyledEngineProvider injectFirst> 
    <Router>
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
    </Router>
    </StyledEngineProvider>
  
       
  );
}

export default App;
/*]
books.filter(book=>((book.title).toLowerCase()).includes(search.toLowerCase()))

]
*/