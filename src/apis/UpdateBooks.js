import { axiosPrivate } from "./axios";

const UpdateBook=async(editbook)=>{

    try {
        const response=axiosPrivate.put('/books/'+editbook.bookid,editbook)
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
export default UpdateBook;