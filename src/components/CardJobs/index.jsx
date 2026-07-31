/* eslint-disable react/prop-types */


import { FaRegUserCircle } from "react-icons/fa";
import { Container } from "./style";
import { USER_ROLE } from "../../utils/roles";
import IsActive from "../isActive";
import IconUser from "../IconUser";


export default function CardJobs({props}) {
 
    const dateJob = new Date(Number(props.date));

    const hours = dateJob.getHours();
    const minutes = dateJob.getMinutes();
    let correctMinutes;

    if(minutes >= 0 && minutes < 10) {
        correctMinutes = `${minutes}0`
    } else {
        correctMinutes = minutes
    }

    const checkTypeOfJob = () => {
        if (props.job === "Casa" || props.job === "Estabelecimento") {
            return `${props.title}`
        }
        if (props.job === "Apartamento") {
            return  `${props.title}, Apt ${props.apartment_number}`
        }
    }

    const typeOfJob = checkTypeOfJob()

    return (
        <Container to={`/job/${props.id}`}>

            <div className="img">
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
                

                <div>
                    <div>
                        <span>
                            <h4>VALOR</h4>
                            <h3>R${props.budget}</h3>
                        </span>

                        <span>
                            <h4>AREA</h4>
                        </span>

                    </div>

                    <button>a</button>
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