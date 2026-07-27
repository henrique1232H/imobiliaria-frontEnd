import { Container } from "./style";


export default function Button({text, onClick, type = "button"}) {

    return (
        <Container type={type} onClick={onClick}>
            {text}
        </Container>
    )
}