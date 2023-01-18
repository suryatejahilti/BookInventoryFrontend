import useAxiosPrivate from "../hooks/useAxiosPrivate";

const GetGoogleBooks=async(searchid)=>{
    const axiosPrivate = useAxiosPrivate();
    try {   
            console.log("searching")
            const response= await axiosPrivate.get('/googlebooks/'+searchid)
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
  export default GetGoogleBooks;