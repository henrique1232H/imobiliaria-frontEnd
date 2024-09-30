import { Container } from "./style";


export default function InputForm({placeholder, onChange, isActive, icon: Icon, onClick, onBlur, type}) {

    return (
        <Container isActive={isActive} onClick={onClick} onBlur={onBlur}>

            
            <input type={type} placeholder={placeholder} onChange={onChange}/>

            {
                Icon && <Icon />
            }
            
        </Container>
    )
}