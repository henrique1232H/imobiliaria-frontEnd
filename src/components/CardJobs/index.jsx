/* eslint-disable react/prop-types */


import { FaRegUserCircle } from "react-icons/fa";
import { Container } from "./style";
import { USER_ROLE } from "../../utils/roles";
import IsActive from "../isActive";


export default function CardJobs({title, description, street, city,user,district,tags, link, situation}) {
    
    return (
        <Container to={`/job/${link}`}>

            <h2>{title}    <IsActive active={situation} card /> </h2>

            <div className="icon">
                {
                    user.icon === "none" ? 
                    <FaRegUserCircle fontSize={25} /> : 
                    <img src={user.icon} alt="icon do usuario" />
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

            
            
            <div>
                {
                    tags.map(entries => {
                        return <span key={entries.id}><p> {entries.name} </p></span> 
                    })
                }
            </div>

            
        </Container>
    )
}