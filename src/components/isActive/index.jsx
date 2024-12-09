/* eslint-disable react/prop-types */
import { Container } from "./style";

export default function IsActive({active, card}) {

    let color = "";
    let colorText = "#fff"
    let text = ""

    if(active === "is_active") {
        color = "#39fb6b";
        text = "ativo"
    } else if (active === "waiting_customer") {
        color = "#e6fe20"
        text = "Esperando o fotográfo"
    } else if (active === "waiting_admin") {
        text = "Esperando a imobiliaria"

     }else {
        color = "#2a2a26"
        text = "terminado"
    }

    return <Container card={card} style={{background: color, color: colorText}}>
        {text}
    </Container>
}