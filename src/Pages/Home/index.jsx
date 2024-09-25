import { useEffect } from "react";
import {api} from "../../service/api";
import { Container } from "./style";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";

export default function Home() {

    useEffect(() => {
        async function getJobs() {
            const response = await api.get("/jobs/1");
            console.log(response);
        }

        getJobs()
    }, []);

    return (
        <Container>
            <Header/>

            <Section>
                <h1>A melhor plataforma para você que é uma imobiliária ou para você fotografo</h1>
                

                <p>Entre agora para conhecer mais</p>

                <Link to="/register">
                    Entrar
                </Link>
            </Section>

            
        </Container>
    )
}