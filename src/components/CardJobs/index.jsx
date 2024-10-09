import { Container } from "./style";


export default function CardJobs({title, description, localization}) {

    return (
        <Container>

            <h2>{title}</h2>
            <p>{description}</p>

            <p>{localization}</p>
            
        </Container>
    )
}