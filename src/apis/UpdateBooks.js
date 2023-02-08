import { useSelector } from "react-redux";
import { getAuth } from "../store/reducers/AuthSlice";
import { axiosPrivate } from "./axios";

const UpdateBook=async(editbook)=>{
  const auth=JSON.parse(localStorage.getItem("auth"));
  const bookRequest={
    book:editbook,
    user:auth.user
  }

    try {
        const response=axiosPrivate.put('/books',bookRequest)
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