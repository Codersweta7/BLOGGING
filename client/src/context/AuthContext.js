import { createContext, useEffect, useState } from "react";
import axios from "../configs/axios-config";
import { Loader } from "../Components/Loader";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const fetchAuth = async () => {
            try {
                await axios.get("/user/check-auth")
                    .then(res => {
                        setIsAuthenticated(res.data?.isAuthenticated);
                    })
            } catch (error) {
                setIsAuthenticated(false);
            }
        }
        fetchAuth();
    }, [])
    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {isAuthenticated === null ? <LoaderBox /> : children}
        </AuthContext.Provider>
    )
}

const LoaderBox = () => {
    return (
        <div style={{width: '100vw', height: "100vh"}} className="d-flex align-items-center justify-content-center">
            <Loader />
        </div>
    )
}

export default AuthContext;