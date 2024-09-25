import { Container, Form } from "./style";
import InputForm from "../../components/InputForm";
import { useState } from "react";

import {api} from "../../service/api"
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import CheckBox from "../../components/Checkbox";

export default function SignUp() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState(false);


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
                    <InputForm placeholder="Seu nome..." onChange={e => setName(e.target.value)} />

                    <InputForm placeholder="Seu email..." onChange={e => setEmail(e.target.value)} />

                    <InputForm placeholder="Sua senha..." onChange={e => setPassword(e.target.value)} />

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