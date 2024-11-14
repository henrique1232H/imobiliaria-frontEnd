import Header from "../../components/Header";
import { Container, EmptyJob } from "./style";

import { useAuth } from "../../hooks/auth";
import { BiTaskX } from "react-icons/bi";


import Section from "../../components/Section"
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import CardJobs from "../../components/CardJobs";
import { USER_ROLE } from "../../utils/roles";

export default function DashBoard() {

    const {user} = useAuth()
    const [data, setData] = useState([]);

    useEffect(() => {
        async function handleSearchJobs() {
            const response = await api.get(`/search/user`, {withCredentials: true})
            
            setData(response.data);
        }

        
        handleSearchJobs()
    },[]);

    return (
        <Container>

            <Header/>


            <main>
                <Section>

                    <div>


                        <h1>Ola, {user.name} </h1>
                        <h1>Vamos começar a trabalhar</h1>

                        <h2>Seus trabalhos</h2>


                        {   
                            data.length > 0 ?
                            data.map((job, key) => {
                                return <CardJobs key={key} timeout={job.entries.timeout} date={job.entries.day} price={job.entries.budget} situation={job.entries.situation} link={job.entries.id} user={user} title={job.entries.title} description={job.entries.description} street={job.entries.street} city={job.entries.city} district={job.entries.district} tags={job.tags}/>
                            })

                            :
                            <EmptyJob>
                                <h3>{user.role === USER_ROLE.ADMIN ? "Vamos adicionar alguns trabalhos" : "Vamos buscar alguns trabalhos" }  </h3>

                                <BiTaskX/>
                            </EmptyJob>
                        }
                        
                        
                    </div>
                </Section>
            </main>

        </Container>
    )
}