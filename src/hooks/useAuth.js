import { useContext } from "react";
import DataContext from "../context/DataContext";

const useAuth = () => {
    const {auth, setAuth}=useContext(DataContext);
    
    return {auth,setAuth}
}

export default useAuth;