/* eslint-disable react/prop-types */


import { Container } from "./style";
import IsActive from "../isActive";
import IconUser from "../IconUser";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import TypeOfJob from "../TypeOfJob";
import { MdOutlineHideImage } from "react-icons/md";


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
                    <div>
                        <MdOutlineHideImage fontSize={20} style={{marginBottom: "1rem"}}/>
                        <span style={{fontSize: "0.8rem"}}>Aguardando fotos do fotógrafo</span>     
                    </div>
                    :
                    <img src={`${api.defaults.baseURL}${image.file}`} />
                }

                <TypeOfJob props={props.job} />

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
                            <h4>ÁREA</h4>
                            <h3> {props.job} </h3>
                        </span>

                    </div>

                    <button>
                        {
                            situationOfJob
                        }
                    </button>
                </div>


            </section>
        </Container>
    )
}