import { axiosPrivate } from "./axios";


const DeleteBook=async(id)=>{
  const auth=JSON.parse(localStorage.getItem("auth"));
    try {
      console.log(id)
        const response=axiosPrivate.delete('/books/'+id+"/"+auth.user);
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
export default DeleteBook;