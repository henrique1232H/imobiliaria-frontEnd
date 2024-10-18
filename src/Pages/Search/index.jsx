import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container } from "./style";
import { api } from "../../service/api";
import CardJobs from "../../components/CardJobs";


export default function Search() {


    const [data, setData] = useState([]);
    const [input, setInput] = useState("")

    useEffect(() => {
        async function handleData() {
            const response = await api.get("/search", {withCredentials:true});

            setData(response.data)
        }

        handleData()

    }, [])

    return (
        <Container>
            <Header/>

            <main>
                <section>

                    <input type="text" placeholder="Pesquisar trabalhos..." onChange={e => setInput(e.target.value)} />
                </section>

                <section>
                        {
                            data.map((entries, key) => {
                                return <CardJobs key={entries.id} link={entries.id} title={entries.title} description={entries.description} />
                            })
                        }
                </section>
            </main>

            





        </Container>
    )
}