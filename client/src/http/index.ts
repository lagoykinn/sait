import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

const $user = axios.create({
    // withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,

});

const $authUser = axios.create({
    // withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
});

const authInterceptor = (config: InternalAxiosRequestConfig<Headers>) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};

$authUser.interceptors.request.use(authInterceptor);

export { $user, $authUser };
