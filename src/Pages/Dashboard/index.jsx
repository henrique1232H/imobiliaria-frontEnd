import Header from "../../components/Header";
import { Container } from "./style";

import { useAuth } from "../../hooks/auth";

import Section from "../../components/Section"
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import CardJobs from "../../components/CardJobs";

export default function DashBoard() {

    const {user} = useAuth()
    const [data, setData] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [imageUrl, setImageUrl] = useState("")

    useEffect(() => {
        async function handleSearchJobs() {
            const response = await api.get("/jobs", {withCredentials: true})
                        
            setData(response.data);
        }

        
        handleSearchJobs()

        
    },[])
    
    

    
    return (
        <Container>

            <Header/>


            <main>
                <Section>

                    <div>

                        <h1>Vamos começar a trabalhar</h1>

                        <h2>Seus trabalhos</h2>


                        {
                            data.map((entries, key) => {

                                return <CardJobs key={key} link={entries.id} title={entries.title} description={entries.description} localization={entries.localization} img={photos}/>
                            })
                        }
                        
                        
                    </div>
                </Section>
            </main>

        </Container>
    )
}