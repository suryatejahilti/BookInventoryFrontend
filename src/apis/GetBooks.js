import useAxiosPrivate from "../hooks/useAxiosPrivate";

const GetBooks=async()=>{
    const axiosPrivate = useAxiosPrivate();
    try {
            const response= await axiosPrivate.get('/books')
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
export default GetBooks;