import Header from "../../components/Header";
import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

export default function DashBoard() {

    const {user} = useAuth()

    return (
        <Container>

            <Header/>

            <div>
                <h1>Vamos começar a trabalhar</h1>
                <h2>
                    as
                </h2>
            </div>
        </Container>
    )
}