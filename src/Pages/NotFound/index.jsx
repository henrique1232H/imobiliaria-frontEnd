import { Link } from "react-router-dom";
import { Container } from "./style";


export default function NotFound() {
    

    return (
        <Container>
            <h1>Pagina não achada, por favor volte</h1>

            <img
                src="https://picsum.photos/600/600"
                alt="imagem ilustrativa"
              />

            
            <p>Veja essa imagem e sinta-se a vontade a voltar para a home.</p>
            <p>Por conta da casa.</p>

            <Link to="/">
                Voltar
            </Link>
        </Container>
    )
}