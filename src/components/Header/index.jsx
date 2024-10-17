import { Container, Navigation } from "./style";
import Input from "../Input";
import {CiSearch} from "react-icons/ci";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE} from "../../utils/roles";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import AlertDialog from "../AlertDialog";
import AlertDialogExit from "../AlertDialog";
import { Link } from "react-router-dom";



export default function Header() {

    const [input, setInput] = useState(false);
    const {user, signOut} = useAuth();


    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <div>
                            <Link to="/">
                                <h1>fotop</h1>
                            </Link>
                        </div>
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

                        [USER_ROLE.ADMIN].includes(user.role) ?
                            <li>

                                <Navigation to="/search">
                                    Procurar trabalhos
                                </Navigation>

                                <Navigation to="/add">
                                    Adicionar um novo trabalho
                                </Navigation>

                                <Navigation to="/profile">
                                   <FaRegUserCircle fontSize={20}/>
                                </Navigation>

                                <AlertDialogExit />
                            </li>
                        :

                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                            <li>
                                <Navigation to="/search">
                                    Procurar trabalhos
                                </Navigation>
                                
                                <Navigation to="/add">
                                    Adicionar um novo trabalho
                                </Navigation>

                                <Navigation to="/profile">
                                   <FaRegUserCircle fontSize={20}/>
                                </Navigation>

                                <AlertDialogExit/>

                            </li>
                        
                    }
                </ul>
            </nav>

        </Container>
    )
}