import { axiosPrivate } from "./axios";

const PostBook=async(book)=>{
  const auth=JSON.parse(localStorage.getItem("auth"));
  const bookRequest={
    book:book,
    user:auth.user
  }
    try {
        const response =axiosPrivate.post('/books',bookRequest)
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