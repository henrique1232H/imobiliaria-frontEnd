import { Container } from "./style";



export default function AppError({text}) {
    return (
        <Container>
            <h3>{text}</h3>
        </Container>
    )
}