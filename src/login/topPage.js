import { Outlet,Navigate } from "react-router-dom";

export default function ProtectedRoute() {
    const login = localStorage.getItem('message') == "logged in successfully";
    return login ? <Outlet /> : <Navigate to='/login' replace />;
}