/* eslint-disable react/prop-types */
import { api } from "../../service/api";
import { Container, FallBack, Image } from "./style";

export default function IconUser({src}) {

    //${api.defaults.baseURL}/ ${src}

    return (
        <Container>
            <Image src={`http://github.com/henrique1232H.png`} alt="foto do usuario"/>

            <FallBack delayMs={600}>
                    TESTANDO
            </FallBack>

        </Container>
    )
}