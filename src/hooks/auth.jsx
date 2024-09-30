import { useContext, createContext, useEffect, useState } from "react";
import { api } from "../service/api";


export const AuthContext = createContext({})


function AuthProvider({children}) {
    const [data, setData] = useState({});
    
    
    async function signIn({email, password}) {
        
        try {
            const response = await api.post("/sessions", {email,password});
            const {user, token} = response.data;
            
            localStorage.setItem("@fotop:user", JSON.stringify(user));
            localStorage.setItem("@fotop:token", token);
            
            api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
            
            setData({user, token});
        } catch(err) {
            if(err.response) {
                alert(err.response.data.message);
            } else {
                alert("Não foi possível entrar");
            }
        }
    }
    
    async function signOut() {
        localStorage.removeItem("@fotop:user");
        localStorage.removeItem("@fotop:token")
        
        setData({})
    }
    
    
    useEffect(() => {
        const token = localStorage.getItem("@fotop:token");
        const user = localStorage.getItem("@fotop:user");

        if(token && user) {
            api.defaults.headers.common[`Authorization`] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }


        
    }, []);
    
    return (
        <AuthContext.Provider value={{signIn, signOut, user: data.user}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    
    return context
}

export {AuthProvider, useAuth}