import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container } from "./style";
import { api } from "../../service/api";
import CardJobs from "../../components/CardJobs";
import Footer from "../../components/Footer";


export default function Search() {


    const [data, setData] = useState([]);
    const [input, setInput] = useState("")

    useEffect(() => {
        async function handleData() {
            const response = await api.get("/search", {withCredentials:true});
            setData(response.data)
        }
        handleData()
    }, [input])



    return (
        <Container>
            <Header/>

            <main>
                <section>

                    <input type="text" placeholder="Pesquisar trabalhos..." onChange={e => setInput(e.target.value)} />
                </section>

                <section>
                        {
                            data.map((job) => {
                                return <CardJobs key={job.entries.id} props={job.entries}/>
                            })
                        }
                </section>
            </main>

            <Footer />
        </Container>
    )
}