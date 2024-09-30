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




export default function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState(false);

    const [inputEmail, setInputEmail] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);
    const [inputName, setInputName] = useState(false)


    const navigate = useNavigate()



    const handleCreateUser = async (e) => {
        e.preventDefault();

        let custom

        if(!role) {
            custom = "customer"
        } else {
            custom = "admin"
        }

        const response = await api.post("/auth", {name, password, email,role: custom});

        console.log(response)
        
        alert(response.data.message)
        navigate("/signIn")
    }

    return (
        <Container>
            <Form>

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

            <div>
            </div>
        </Container>
    )
}