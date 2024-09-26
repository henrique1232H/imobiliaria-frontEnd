import { Container } from "./style";


export default function InputForm({placeholder, onChange, isActive, icon: Icon, onClick, onBlur}) {

    return (
        <Container isActive={isActive} onClick={onClick} onBlur={onBlur}>

            
            <input type="text" placeholder={placeholder} onChange={onChange}/>

            {
                Icon && <Icon />
            }
            
        </Container>
    )
}