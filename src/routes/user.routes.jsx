import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import SignIn from "../Pages/SignIn"
import SignUp from "../Pages/SignUp"

export default function UserRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/signIn" element={<SignIn />}/>
            <Route path="/register" element={<SignUp />}/>
        </Routes>
    )
}