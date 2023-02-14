import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getAuth } from "../store/reducers/AuthSlice";

const RequireAuth = ({ allowedRoles }) => {
    const auth=useSelector(getAuth)
    const location = useLocation();

    return (
        allowedRoles.find(ele=>ele===auth?.roles)
        ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/" state={{ from: location }} replace />
    );
}

export default RequireAuth;