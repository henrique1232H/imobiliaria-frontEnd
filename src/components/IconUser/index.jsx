/* eslint-disable react/prop-types */
import { api } from "../../service/api";
import { Container, FallBack, Image } from "./style";

export default function IconUser({src}) {

    //${api.defaults.baseURL}/ ${src}

    return (
        <Container>
            <Image src={`${src}`} alt="foto do usuario"/>

            <FallBack delayMs={600}>

            </FallBack>

        </Container>
    )
}