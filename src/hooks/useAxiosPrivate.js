import { axiosPrivate } from "../apis/axios";
import { useEffect,useContext } from "react";
import useAuth from "./useAuth";
import DataContext from "../context/DataContext";

const useAxiosPrivate = () => {
    const { auth } = useAuth();
    const {sess, setSess}=useContext(DataContext);

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 ) {
                    setSess(false);
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );


        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth])

    return axiosPrivate;
}

export default useAxiosPrivate;