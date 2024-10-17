import { Routes, Route } from "react-router-dom";

import Add from "../Pages/Add";
import DashBoard from "../Pages/Dashboard";
import Job from "../Pages/Job";
import Profile from "../Pages/Profile";
import Search from "../Pages/Search";
import NotFound from "../Pages/NotFound";

export default function AdminRoutes() {

    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/add" element={<Add />}/>
            <Route path="/:job_id" element={<Job />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/search" element={<Search />}/>

            <Route path="*" exact={true} element={<NotFound/>}/>
        </Routes>
    )
}