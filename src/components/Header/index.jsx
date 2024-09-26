import { Container, Navigation } from "./style";
import Input from "../Input";
import {CiSearch} from "react-icons/ci";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";


export default function Header() {

    const [input, setInput] = useState(false);
    const {user} = useAuth()


    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <div>
                            <h1>fotop</h1>
                        </div>
                    </li>

                    <li>
                        <Input placeholder="Pesquisar" icon={CiSearch} onFocus={e => setInput(!input)} isActive={input} onBlur={e => setInput(!input)}/>
                    </li>

                    {
                        !user ? 
                        <li>
                            <Navigation to="/signIn">
                                Entrar
                            </Navigation>

                            <Navigation to="/register">
                                cadastrar
                            </Navigation>
                        </li>

                        : 
                        <li>
                            <Navigation to="/add">
                                Adicionar fotos
                            </Navigation>
                        </li>
                    }

                    
                </ul>
            </nav>

        </Container>
    )
}