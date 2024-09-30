import Header from "../../components/Header";
import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import Section from "../../components/Section"

export default function DashBoard() {

    const {user} = useAuth()

    return (
        <Container>

            <Header/>


            <main>
                <Section>

                    <div>

                        <h1>Vamos começar a trabalhar</h1>
                        
                        
                    </div>
                </Section>
            </main>

        </Container>
    )
}