import axios from 'axios'

const API= axios.create({
    baseURL: 'http://localhost:8080'
});

const GetBooks=async()=>{
    try {
            const response= await API.get('/books')
            const NewBooksList =response.data
            return (NewBooksList)
    }
    catch (err) {
            if (err.response) {
              // Not in the 200 response range 
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            } else {
              console.log(`Error: ${err.message}`);
            }
}
}
const GetGoogleBooks=async(searchid)=>{
  try {
          const response= await API.get('/googlebooks/'+searchid)
          const NewBooksList =response.data
          return (NewBooksList)
  }
  catch (err) {
          if (err.response) {
            // Not in the 200 response range 
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
}
}
const PostBook=async(book)=>{
    try {
        const response =API.post('/books',book)
    }
    catch(err){
        if (err.response) {
            // Not in the 200 response range 
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
    }
}
const UpdateBook=async(editbook)=>{
    try {
        const response=API.put('/books/'+editbook.bookid,editbook)
    }
    catch(err){
        if (err.response) {
            // Not in the 200 response range 
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
    }
}
const DeleteBook=async(id)=>{
        try {
            const response=API.delete('/books/'+id);
        }
        catch(err){
            if (err.response) {
                // Not in the 200 response range 
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
              } else {
                console.log(`Error: ${err.message}`);
              }
        }
}
export {GetBooks,PostBook,UpdateBook,DeleteBook,GetGoogleBooks}