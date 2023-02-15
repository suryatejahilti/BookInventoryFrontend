import axios from "axios";
const BASE_URL = 'https://bookinventorybackend-production-3256.up.railway.app';

export default axios.create({
    baseURL: BASE_URL
});

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});
const requestIntercept = axiosPrivate.interceptors.request.use(
    config => {
        if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('auth')).accessToken}`;
        }
        return config;
    }, (error) => Promise.reject(error)
);

const responseIntercept = axiosPrivate.interceptors.response.use(
    response => response,
    async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
            prevRequest.sent = true;
            //const newAccessToken = await refresh();
            prevRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('auth').accessToken}`;
            return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
    }
);
export {axiosPrivate};