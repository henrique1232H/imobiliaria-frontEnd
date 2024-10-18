import { api } from "../../service/api";
import { Container } from "./style";


export default function CarouselCard({img, }) {
    return (
        <Container>

            <figure>

                <img src={`${api.defaults.baseURL}${img}`} alt="" />

                <figcaption>a</figcaption>
            </figure>

        </Container>
    )
}