import { Link, useNavigate } from "react-router-dom";
import { Container } from "./style";


export default function NotFound() {
    

    return (
        <Container>
            <h1>Pagina não achada volte</h1>

            <Link to="/">
                Voltar
            </Link>
        </Container>
    )
}