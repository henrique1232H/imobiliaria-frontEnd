import { useContext, createContext, useEffect, useState } from "react";
import { api } from "../service/api";


export const AuthContext = createContext({})


function AuthProvider({children}) {
    const [data, setData] = useState({});
    
    
    async function signIn({email, password}) {
        
        try {
            const response = await api.post("/sessions", {email,password}, {withCredentials: true});
            const user = response.data;
            localStorage.setItem("@fotop:user", JSON.stringify(user));
            setData({user});
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
        
        setData({})
    }
    
    
    useEffect(() => {

        try {
            const user = localStorage.getItem("@fotop:user");

            if(user) {
                setData({
                    user: JSON.parse(user)
                })
            }

        } catch (err) {
            console.log(err)
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