import { render } from "@testing-library/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handleNewBook } from "../../store/reducers/BooksSlice";
const AddNewBook = () =>{
    const[title,setTitle]=useState('');
    const[author , setAuthor]=useState('');
    const [description,setDescription]=useState('');
    const[price,setPrice]=useState(0);
    const [copies,setCopies]=useState(0);
    const[displayWarning , setDisplayWarning]=useState(false);
    const[displaySuccess , setDisplaySuccess]=useState(false);
    const dispatch=useDispatch()
    const navigate=useNavigate()
    async function submitNewBook(){
        
        if(title!=='' && author!=='' && description!=='' && copies>0 && price>0){
            const register= async()=>{
                try{
                  const newbook={
                      bookid:0,
                      title:title,
                      author:author,
                      price:price,
                      quantity:copies,
                      description:description
                    }
                  dispatch(handleNewBook(newbook));
                  navigate("/main")
      
                } catch (err){} 
              }
                register();
             
            setTitle('');
            setAuthor('');
            setDescription('');
            setPrice(0);
            setCopies(0);
            setDisplayWarning(false);
            setDisplaySuccess(true);
            //handleNewBook();
        }
        else{
            setDisplayWarning(true);
            setDisplaySuccess(false);
        }
    }
    return(
        <div className="container mt-5 mb-5">
            {
                displaySuccess &&
                <div className="alert alert-success" role='alert'>
                    Book added Successfully
                </div>
            }
            {
                displayWarning &&
                <div className="alert alert-danger" role='alert'>
                    All fields must be filled.
                </div>
            }
            <div className="card">
                <div className="card-header">
                    Add a new book
                </div>
                <div className="card-body">
                    <form method='POST'>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Title</label>
                                <input type='text' className="form-control" name='title' required onChange={e => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label className="form-label">Author</label>
                                <input type='text' className="form-control" name='author' required onChange={ e => setAuthor(e.target.value)} value={author}/>
                            </div>
                        </div>
                        <div className='col-md-12 mb-3'>
                            <label className='form-label'>Description</label>
                            <textarea className='form-control' id='exampleFormControlTextarea1' rows={3} 
                                onChange={e => setDescription(e.target.value)} value={description}></textarea>
                        </div>
                        <div className='col-md-3 mb-3'>
                            <label className='form-label'>Copies</label>
                            <input type='number' className='form-control' name='Copies' required 
                                onChange={e => setCopies(Number(e.target.value))} value={copies}/>
                                <label className='form-label'>Price</label>
                                <input type='number' className='form-control' name='price' required 
                                onChange={e => setPrice(Number(e.target.value))} value={price}/>
                            <button type='button' className='btn main-color text-white mt-3 bg-dark' onClick={submitNewBook}>
                                Add Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddNewBook