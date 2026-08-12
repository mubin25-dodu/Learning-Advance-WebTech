import { useEffect } from "react";
import { useAuth } from "../Hooks/auth";
import { axiosPrivete } from "./axios";
import type { InternalAxiosRequestConfig } from "axios";

export const useApi = (): typeof axiosPrivete => {
    const { auth } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosPrivete.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                if (auth?.accessToken && config.headers && !config.headers["Authorization"]) {
                    config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        return () => {
            axiosPrivete.interceptors.request.eject(requestIntercept);
        };
    }, [auth]);

    return axiosPrivete;
};