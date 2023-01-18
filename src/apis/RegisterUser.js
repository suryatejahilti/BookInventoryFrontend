import { useContext } from "react";
import DataContext from "../context/DataContext";
import useAuth from "../hooks/useAuth";
import axios from "./axios";

const RegisterUser=async(registrationRequest)=>{

    try {
      console.log("register api started");
        const response=await axios.post('/register',registrationRequest);
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        const user=response?.data?.name;
        //console.log({ user, roles, accessToken });
        console.log("register api ended");
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
  export default RegisterUser;