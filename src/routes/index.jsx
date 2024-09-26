import { BrowserRouter } from "react-router-dom";
import CustomerRoutes from "./customer.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/auth";

export default function Routes() {

    const {user} = useAuth();

    return (
        <BrowserRouter>
            {
                !user ? <AuthRoutes /> : <CustomerRoutes />
            }
        </BrowserRouter>
    )
}