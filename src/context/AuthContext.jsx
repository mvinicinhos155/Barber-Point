import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Certifique-se de estar dentro de um Router

    const login = (email, password) => {
        console.log("login", { email, password });
        if (password === "1234") {
            setUser(email);
            navigate("/"); // Navegação após o login
        }
    };

    const logout = () => {
        console.log("logout");
        setUser(null);
        navigate("/login"); // Navegação após o logout
    };


    useEffect(() => {
        if (user) {
            navigate('/'); // ou qualquer outra lógica de navegação que precise do hook
        }
    }, [user, navigate]);

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
