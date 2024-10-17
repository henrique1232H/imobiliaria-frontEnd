import { Container } from "./style";


export default function CardJobs({title, description, localization, link}) {

    

    return (
        <Container to={`/${link}`}>

            <h2>{title}</h2>
            <p>{description}</p>

            <p>{localization}</p>
            
        </Container>
    )
}