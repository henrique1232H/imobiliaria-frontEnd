/* eslint-disable react/prop-types */


import { FaRegUserCircle } from "react-icons/fa";
import { Container } from "./style";
import { USER_ROLE } from "../../utils/roles";
import IsActive from "../isActive";
import IconUser from "../IconUser";


export default function CardJobs({title,price, timeout,date,description, street, city, user,district,tags, link, situation}) {
    
    
    const dateJob = new Date(Number(date));

    const hours = dateJob.getHours();
    const minutes = dateJob.getMinutes();
    let correctMinutes;

    if(minutes >= 0 && minutes < 10) {
        correctMinutes = `${minutes}0`
    } else {
        correctMinutes = minutes
    }


    return (
        <Container to={`/job/${link}`}>
            <div>
                <h2>{title}</h2>
                <div>

                    <span>
                        <h3>{hours}:{correctMinutes}</h3>
                        <h3>-</h3>
                        <h3>{timeout}</h3>
                    </span>

                    <h3>R$ {price}</h3>
                    <IsActive active={situation} card />
                </div>

            </div>

            <div className="icon">
                {
                    user.icon === "none" ? 
                    <FaRegUserCircle fontSize={25} /> : 
                    <IconUser  src={user.icon}/>
                }
                <h3>{user.name}</h3>
            </div>
            
            <p>{description}</p>
            
            <ul>
                <li><p> <strong>Rua: </strong> {street}</p></li>
                <li><p> <strong>Cidade:</strong> {city} </p></li>
                <li><p> <strong>Bairro: </strong>{district} </p></li>
            </ul>
            
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