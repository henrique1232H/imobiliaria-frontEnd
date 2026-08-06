import { Container } from "./style";


export default function IconSvg({children, icon: Icon, color}) {
    return (
        <Container>
            {
                color !== undefined ? <Icon size={25} color={color.svg}/> : <Icon size={25}/>
            }

            {children}
        </Container>
    )
}