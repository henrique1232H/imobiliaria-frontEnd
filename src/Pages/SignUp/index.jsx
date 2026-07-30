import { Container, Form } from "./style";
import InputForm from "../../components/InputForm";
import { useState } from "react";

import {api} from "../../service/api"
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CheckBox from "../../components/Checkbox";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import AppError from "../../components/AppError";
import GoBack from "../../components/Back";
import AuthLink from "../../components/AuthLink";






export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(false);

    const [inputEmail, setInputEmail] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);
    const [inputName, setInputName] = useState(false);
    const [error, setError] = useState(false)
    const [errorName, setErrorName] = useState("")


    const navigate = useNavigate()


    const handleCreateUser = async (e) => {
        e.preventDefault();

        if(password.length < 6) {
            setErrorName("A senha deve ter no mínimo 6 caracteres")
            setError(!error)
            return
        }

        if(name === "" || email === "" ||password === "") {
            setErrorName("Você esqueceu de colocar os valores no campo")
            setError(!error)
            return
        }
        
        setError(!error)
        

        let custom

        if(!role) {
            custom = "customer"
        } else {
            custom = "admin"
        }
        

        try {
            await api.post("/auth", {name, password, email, role: custom});
            navigate("/signIn");

        } catch (err) {
            setErrorName(err.response.data.message)
        }
    }

    return (
        <Container>

            <Form>

                {
                    error && <AppError text={errorName}/>
                }
                
                <GoBack onClick={() => navigate("/")}/>
                <h1>fotop</h1>
                <h2>Criar sua conta</h2>

                <div>
                    <InputForm placeholder="Seu nome..." type="text" onChange={e => setName(e.target.value)} icon={MdOutlineDriveFileRenameOutline} onClick={e => setInputName(!inputName)} onBlur={(e) => {
                        if (inputName === true) {
                            setInputName(!inputName)
                        }}}  isActive={inputName}/>
                    
                    <InputForm placeholder="Seu email..." type="email" onChange={e => setEmail(e.target.value)} icon={MdOutlineAlternateEmail} onClick={e => setInputEmail(!inputEmail)} onBlur={e => {if (inputEmail === true) {
                        setInputEmail(!inputEmail)
                        }
                        }}  isActive={inputEmail}/>

                    <InputForm placeholder="Sua senha..." type="password" onChange={e => setPassword(e.target.value)} icon={FaLock} onClick={e => setInputPassword(!inputPassword)} onBlur={e => {if(inputPassword === true) {
                        setInputPassword(!inputPassword)
                    }}}  isActive={inputPassword}/>

                    <div className="checkbox">
                        <CheckBox isActive={role} onClick={e => setRole(!role)} />
                        <label htmlFor="">{role ? "Sou uma imobiliária" : "Sou um fotografo"}</label>
                    </div>

                    <div className="auth-links">
                        <AuthLink href="/signIn">Já possui uma conta?</AuthLink>
                        <AuthLink href="/resetPassword">Esqueceu a senha?</AuthLink>
                    </div>

                    <div>
                        <Button onClick={ e => handleCreateUser(e)} text="Criar conta"/>
                    </div>
                </div>

            </Form>

            <div />
        </Container>
    )
}