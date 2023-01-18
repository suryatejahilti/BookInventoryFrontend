import { useContext, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import DataContext from "../context/DataContext";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const {auth} = useContext(DataContext);
    const location = useLocation();

    return (
        allowedRoles.find(ele=>ele===auth?.roles)
        ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;