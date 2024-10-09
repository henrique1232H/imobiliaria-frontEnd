import { BrowserRouter } from "react-router-dom";
import CustomerRoutes from "./customer.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";
import { api } from "../service/api";

export default function Routes() {

    const {user, signOut} = useAuth();

    useEffect(() => {
        api.get("/user/validated", {withCredentials: true}).catch(err => {
            if(err.response?.status === 500 || err.response?.status === 401) {
                signOut()
            } 
        })
    }, [])


    return (
        <BrowserRouter>
            {
                !user ? <AuthRoutes /> : <CustomerRoutes />
            }
        </BrowserRouter>
    )
}