import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';


import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useFormik } from 'formik';
import PostBook from '../apis/PostBook';
import { handleNewBook } from '../store/reducers/BooksSlice';
import { number } from 'react-admin';

const signUpSchema = Yup.object({
    title: Yup.string().min(2).max(25).required("Please enter title"),
  author: Yup.string().email().required("Please enter author"),
  price:Yup.number().required("please enter price"),
  quantity:Yup.number().required("please enter quantity"),
  description: Yup.string()
  });
  
  
  
  
export default function AddBookForm() {
    const dispatch=useDispatch()
    const initialValues = {
        bookid:0,
        title: "",
        author: "",
        price: 0,
        quantity: 0,
        description:""
      };
    
    
    
      const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
          initialValues,
          validationSchema: signUpSchema,
          validateOnChange: true,
          validateOnBlur: false,
         
          onSubmit: (values, action) => {
            const register= async()=>{
                try{
                  const newbook={
                      bookid:values.bookid,
                      title:values.title,
                      author:values.author,
                      price:values.price,
                      quantity:values.quantity,
                      description:values.description
                    }
                  dispatch(handleNewBook(newbook));
      
                } catch (err){} 
              }
                register();
             
              action.resetForm();
            },
        });
    
    



        // const handleSubmit= (values, action) => {
        //     const register= async()=>{
        //       try{
        //         const newbook={
        //             bookid:values.bookid,
        //             title:values.title,
        //             author:values.author,
        //             price:values.price,
        //             quantity:values.quantity,
        //             description:values.description
        //           }
        //         dispatch(handleNewBook(newbook));
    
        //       } catch (err){} 
        //     }
        //       register();
           
        //     action.resetForm();
        //   }
















  return (
    <form onSubmit={handleSubmit}>
      <MDBRow className='mb-4'>
        <MDBCol>
        l


            {/* <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /> */}
          <MDBInput id='form6Example1'  label='Title' abel="title"
            type="text"
            value={values.title}
            name="title"
            onChange={handleChange}
            required/>
        </MDBCol>
        <MDBCol>
        <MDBInput id='form6Example1'  label='author' abel="author"
            type="text"
            value={values.author}
            name="author"
            onChange={handleChange}
            required/>
        </MDBCol>
      </MDBRow>

      <MDBInput id='form6Example1'  label='price' abel="price"
            type="number"
            value={values.price}
            name="price"
            onChange={handleChange}
            required/>
       <MDBInput id='form6Example1'  label='quantity' abel="quantity"
            type="number"
            value={values.quantity}
            name="quantity"
            onChange={handleChange}
            required/>
        <MDBInput id='form6Example1'  label='description' abel="description"
            type="text"
            value={values.description}
            name="description"
            onChange={handleChange}
            required/>


      <MDBBtn className='mb-4' type='submit' block>
        Add Book
      </MDBBtn>
    </form>
  );
}