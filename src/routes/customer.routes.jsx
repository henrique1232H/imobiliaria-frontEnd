import { Routes, Route } from "react-router-dom";

import Add from "../Pages/Add";
import DashBoard from "../Pages/Dashboard";

export default function CustomerRoutes() {

    return (
        <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/add" element={<Add />}/>
        </Routes>
    )
}