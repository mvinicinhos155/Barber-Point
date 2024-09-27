import React, { useContext} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/login/Login";

import App from '../src/App.jsx'

import { AuthProvider, AuthContext } from "../src/context/AuthContext.jsx";


function MainRoutes () {  
    
    const Private = ({children}) => {
        const { authenticated } = useContext(AuthContext);

        if  (!authenticated) {
            return <Navigate to="login"/>
        } else {
            return children;
        }
    }
    return ( 
        <Router>
            <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" 
                element={
                    <Private>
                    <App/>
                    </Private>}/>
            </Routes>
            </AuthProvider>
        </Router>
    )
}

export default MainRoutes;