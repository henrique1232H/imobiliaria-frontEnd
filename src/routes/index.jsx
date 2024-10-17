import { BrowserRouter } from "react-router-dom";
import CustomerRoutes from "./customer.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";
import { api } from "../service/api";
import { USER_ROLE } from "../utils/roles";
import AdminRoutes from "./admin.routes";

export default function Routes() {

    const {user, signOut} = useAuth();


    useEffect(() => {
        api.get("/user/validated", {withCredentials: true}).catch(err => {
            if(err.response?.status === 500 || err.response?.status === 401) {
                signOut()
            } 
        })
    }, []);


    function AccessRoutes() {
        switch (user.role) {
            case USER_ROLE.ADMIN:
                return <AdminRoutes />
            case USER_ROLE.CUSTOMER:
                return <CustomerRoutes />
        }

    }

    return (
        <BrowserRouter>
            {
                user ? <AccessRoutes /> : <AuthRoutes />
            }
        </BrowserRouter>
    )
}