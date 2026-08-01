/* eslint-disable react/prop-types */


import { FaRegUserCircle } from "react-icons/fa";
import { Container } from "./style";
import { USER_ROLE } from "../../utils/roles";
import IsActive from "../isActive";
import IconUser from "../IconUser";
import { api } from "../../service/api";
import { useEffect, useState } from "react";


export default function CardJobs({props}) {

    const [image, setImage] = useState([])
 

    const checkTypeOfJob = () => {
        if (props.job === "Casa" || props.job === "Estabelecimento") {
            return `${props.title}`
        }
        if (props.job === "Apartamento") {
            return  `${props.title}, Apt ${props.apartment_number}`
        }
    }

    const checkSituationofJob = () => {
        if (props.situation === "is_active") {
            return "Ver Job"
        } if (props.situation === "is_inactive") {
            return "Ver Fotos";
        }

        return "Ver Detalhes";
    }

    const situationOfJob = checkSituationofJob()
    const typeOfJob = checkTypeOfJob()

    useEffect(() => {
        const imgJob = async () => {
            const response = await api.get(`/file/${props.id}`, {withCredentials: true});
            console.log(response.data[0].images[0].file)
            setImage(response.data[0].images[0])
        }
        imgJob()
    }, [])


    return (
        <Container to={`/job/${props.id}`}>

            <div className="img">
                {
                    image.file === undefined ?
                    <IconUser size={100} color="#ccc" />
                    :
                    <img src={`${api.defaults.baseURL}${image.file}`} />
                }

                <span>{(props.job).toUpperCase()}</span>
            </div>

            <section>
                <div className="head">

                    <div>
                        <h2>{props.district}, {props.city}</h2>
                        <h1>{typeOfJob}</h1>
                    </div>


                    <div>
                        <IsActive active={props.situation} />
                    </div>

                </div>

                <span className="linha"/>
                

                <div className="body">
                    <div>
                        <span>
                            <h4>VALOR</h4>
                            <h3>R${props.budget}</h3>
                        </span>

                        <span>
                            <h4>AREA</h4>
                        </span>

                    </div>

                    <button>
                        {
                            situationOfJob
                        }
                    </button>
                </div>


            </section>

        
         
            {/* {
                USER_ROLE.ADMIN === user.role &&
                <div>
                    <h3>intressados:</h3>
                </div>
            } */}

            
{/*             
            <div>
                {
                    tags.map(entries => {
                        return <span key={entries.id}><p> {entries.name} </p></span> 
                    })
                }
            </div> */}

            
        </Container>
    )
}