import { api } from "../../service/api";
import { Container } from "./style";


export default function CardJobs({title, description, localization, img}) {

    

    return (
        <Container>

            <h2>{title}</h2>
            <p>{description}</p>

            {
                img.map(entries => {
                    return <img src={`${api.defaults.baseURL}${entries}`} />
                })
            }

            <p>{localization}</p>
            
        </Container>
    )
}