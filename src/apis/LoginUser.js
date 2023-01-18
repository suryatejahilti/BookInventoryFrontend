import { useContext } from "react";
import DataContext from "../context/DataContext";
import useAuth from "../hooks/useAuth";
import axios from "./axios";

const LoginUser=async(loginRequest)=>{
    try {
        const response=await axios.post('/login',loginRequest);
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        const user=response?.data?.name;
        return { user, roles, accessToken };
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
  export default LoginUser;