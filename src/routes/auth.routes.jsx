import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"
import NotFound from "../Pages/NotFound";
import ResetPassword from "../Pages/ResetPassword";

export default function AuthRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signIn" element={<SignIn />}/>
            <Route path="/register" element={<SignUp />}/>
            <Route path="/resetPassword" element={<ResetPassword />}/>

            <Route path="*" exact={true} element={<NotFound/>}/>
        </Routes>
    )
}