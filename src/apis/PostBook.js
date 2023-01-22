import { axiosPrivate } from "./axios";

const PostBook=async(book)=>{

    try {
        const response =axiosPrivate.post('/books',book)
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
export default PostBook;