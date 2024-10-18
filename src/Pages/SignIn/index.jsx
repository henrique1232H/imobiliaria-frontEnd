import { Container, Form } from "./style";
import InputForm from "../../components/InputForm";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import AppError from "../../components/AppError";
import GoBack from "../../components/Back";



export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [inputEmail, setInputEmail] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);

    const [error, setError] = useState(false)
    const [errorName, setErrorName] = useState("")

    const {signIn} = useAuth();
    const navigate = useNavigate()


    const handleEnterUser = async (e) => {
        e.preventDefault();

        if(email === "" || password === "") {
            setError(!error);
            setErrorName("Você esqueceu de digitar nos campos")    
        
           return 
        }

        

        signIn({email, password});
        navigate("/")

        
    }

    const handleBack = () => {
        navigate("/")
    }

    return (
        <Container>
            <div />

            <Form>


                {
                    error && <AppError text={errorName}/>
                }

                <GoBack onClick={handleBack}/>
                <h1>fotop</h1>
                <h2>Logar na sua conta</h2>

                <div>
                    <InputForm placeholder="Seu email..." type="email" onChange={e => setEmail(e.target.value)} icon={MdOutlineAlternateEmail} onClick={e => setInputEmail(!inputEmail)} onBlur={e => setInputEmail(!inputEmail)}  isActive={inputEmail}/>

                    <InputForm placeholder="Sua senha..." onChange={e => setPassword(e.target.value)} icon={FaLock} onClick={e => setInputPassword(!inputPassword)} onBlur={e => setInputPassword(!inputPassword)}  isActive={inputPassword} type="password"/>


                    <div>
                        <Button onClick={ e => handleEnterUser(e)} text="Logar na conta"/>  
                    </div>
                </div>
            </Form>

        </Container>
    )
}