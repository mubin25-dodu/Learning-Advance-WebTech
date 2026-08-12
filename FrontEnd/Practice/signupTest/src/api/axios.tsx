import type { AxiosInstance } from "axios";
import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

export  const axiosPrivete :AxiosInstance = axios.create({
    baseURL : base_url,
    headers : {'Content-Type':'application/json'},
    withCredentials:true
});