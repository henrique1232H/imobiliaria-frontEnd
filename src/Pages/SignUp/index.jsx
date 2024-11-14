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

    const handleBack = () => {
        navigate("/")
    }

    return (
        <Container>


            <Form>


                {
                    error && <AppError text={errorName}/>
                }
                



                <GoBack onClick={handleBack}/>
                <h1>fotop</h1>
                <h2>Criar sua conta</h2>

                <div>
                    <InputForm placeholder="Seu nome..." type="text" onChange={e => setName(e.target.value)} icon={MdOutlineDriveFileRenameOutline} onClick={e => setInputName(!inputName)} onBlur={e => setInputName(!inputName)}  isActive={inputName}/>
                    
                    <InputForm placeholder="Seu email..." type="email" onChange={e => setEmail(e.target.value)} icon={MdOutlineAlternateEmail} onClick={e => setInputEmail(!inputEmail)} onBlur={e => setInputEmail(!inputEmail)}  isActive={inputEmail}/>

                    <InputForm placeholder="Sua senha..." type="password" onChange={e => setPassword(e.target.value)} icon={FaLock} onClick={e => setInputPassword(!inputPassword)} onBlur={e => setInputPassword(!inputPassword)}  isActive={inputPassword}/>

                    <div className="checkbox">
                        <CheckBox isActive={role} onClick={e => setRole(!role)} />
                        <label htmlFor="">{role ? "Sou uma imobiliária" : "Sou um fotografo"}</label>
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