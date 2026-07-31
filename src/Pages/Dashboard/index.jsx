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

        if(user.role === "admin") {
            async function handleSearchJobsAdmin() {
                const response = await api.get(`/search/user`, {withCredentials: true})
                
                setData(response.data);
            }

            handleSearchJobsAdmin()
        
        } else {

            async function handleSearchJobCustomer(){
                const response = await api.get(`/search/customer`, {withCredentials: true});

                setData(response.data.map(({job, user}) => ({entries: job, user})))
            }

            handleSearchJobCustomer()

        }

    },[]);


    return (
        <Container>

            <Header/>


            <main>
                <Section>

                    <div>

                        <h1>Ola, {user.name} </h1>
                        <h1>Vamos começar a trabalhar</h1>

                        <h2>{user.role === "admin" ? "Seus Trabalhos" : "Trabalhos que você se candidatou"}</h2>
                        

                        {
                            data.length > 0 ? 
                             data.map(({entries, user}, key) => {
                                return <CardJobs key={key} props={entries}/>
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