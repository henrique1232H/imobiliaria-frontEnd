import { useEffect } from "react";
import {api} from "../../service/api";
import { Container } from "./style";

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
            <h1>alo</h1>
        </Container>
    )
}