import { Container } from "./style";


export default function InputForm({placeholder, onChange}) {

    return (
        <Container>
            
            <input type="text" placeholder={placeholder} onChange={onChange}/>

        </Container>
    )
}