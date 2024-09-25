import { Container } from "./style";


export default function Input({placeholder, icon: Icon, onFocus, onBlur,isActive}) {

    return (
        <Container onFocus={onFocus} onBlur={onBlur} isActive={Boolean(isActive)}>
            {
                Icon && <Icon size={20}/>
            }
            
            <input type="text" placeholder={placeholder}/>

        </Container>
    )
}