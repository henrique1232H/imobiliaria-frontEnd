import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useAuth } from "../../hooks/auth";
import { Container } from "./style";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { api } from "../../service/api";
import CardJobs from "../../components/CardJobs";
import { FaRegStar } from "react-icons/fa";
import { USER_ROLE } from "../../utils/roles";


export default function Profile() {

    const {user} = useAuth();
    const [job, setJob] = useState([])

    useEffect(() => {
        async function handleJob() {
            const response = await api.get("/jobs", {withCredentials: true});

            setJob(response.data)
        }

        handleJob()
    },[])


    console.log(job)

    return (
        <Container isAdmin={user.role}>
            <Header />

            <main>

                <div>
                    <img src="https://picsum.photos/1800/600" alt="" />
                </div>


                <div>
                    <section>

                        <figure>
                            <img src="http://github.com/henrique1232H.png" alt="foto de perfil" />

                            <label htmlFor="picture">
                                <MdOutlineAddPhotoAlternate  fontSize={20}/>
                            </label>
                        </figure>


                        <h2> 
                            {user.name}

                            <span>
                                <FaRegStar />
                                {USER_ROLE.ADMIN === user.role ? "Imobiliária" : "Fotografo" } 
                            </span>

                        </h2>

                        <h3> {user.email} </h3>
                        

                        <h3> {USER_ROLE.ADMIN === user.role ? "Sobre a empresa" : "Sobre meus trabalhos"} </h3>

                        <p></p>

                        <h3>Regiões onde trabalho</h3>

                        <ul>
                            <li>

                            </li>
                        </ul>


                        <input id="picture" type="file" accept=".jpg"/>

                    </section>


                    <section>
                        <div>
                            
                            <div>
                                <h2>{USER_ROLE.ADMIN === user.role ? "Sobre a empresa:" : `Sobre meus trabalhos:`} </h2>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eos labore explicabo amet assumenda ipsam minima dolore, dolor nam ipsa soluta, officia error sint cumque deleniti tempore officiis nulla delectus.
                                </p>
                            </div>

                            <h2> {USER_ROLE.ADMIN === user.role ? "Trabalhos da imobiliária:" : "Meus Trabalhos:"} </h2>


                            {
                                job.map((entries, key) => {
                                    return <CardJobs key={key} link={entries.id} title={entries.title} description={entries.description} />
                                })
                            }
                        </div>
                    </section>


                </div>



            </main>
        </Container>
    )
}