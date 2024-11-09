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
            console.log(response.data)

            setData(response.data)
        }

        handleData()

    }, [input])



    const icon = "http://github.com/henrique1232H.png"

    return (
        <Container>
            <Header/>

            <main>
                <section>

                    <input type="text" placeholder="Pesquisar trabalhos..." onChange={e => setInput(e.target.value)} />
                </section>

                <section>
                        {
                            data.map((entries) => {
                                return <CardJobs key={entries.id} situation={entries.situation} icon={icon} link={entries.id} title={entries.title} description={entries.description}  street={entries.street} district={entries.district} city={entries.city} user={entries.user}  tags={entries.tags} />
                            })
                        }
                </section>
            </main>

            <Footer />
        </Container>
    )
}