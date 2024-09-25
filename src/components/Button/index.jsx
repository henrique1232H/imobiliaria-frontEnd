import { Container } from "./style";


export default function Button({text, onClick}) {

    return (
        <Container onClick={onClick}>
            {text}
        </Container>
    )
}