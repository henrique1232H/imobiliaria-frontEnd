import { Container, Navigation } from "./style";
import Input from "../Input";
import {CiSearch} from "react-icons/ci";
import { useState } from "react";


export default function Header() {

    const [input, setInput] = useState(false);

    console.log(input)

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

                    <li>
                        <Navigation to="/signIn">
                            Entrar
                        </Navigation>

                        <Navigation to="/register">
                            cadastrar
                        </Navigation>
                    </li>
                </ul>
            </nav>

        </Container>
    )
}