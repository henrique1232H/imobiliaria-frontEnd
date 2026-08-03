/* eslint-disable react/prop-types */
import { Container } from "./style";

export default function IsActive({active, card}) {

    let color = "";
    let colorText = "#fff"
    let text = "";
    let circleColor = "";

    if(active === "is_active") {
        color = "#c8f7d4";
        circleColor = "#25ef57"
        text = "Ativo"
    } else if (active === "waiting_customer") {
        color = "#eeff54"
        circleColor = "#a0be26"
        text = "Esperando o fotográfo"
    } else if (active === "waiting_admin") {
        circleColor = "#f9a100";
        text = "Esperando a imobiliaria"

     }else {
        circleColor = "#2a2a26"
        color = "#acaca7"
        text = "Terminado"
    }

    return <Container card={card} style={{background: color, color: colorText}}>
        <span style={{background: circleColor}}/>
        
        <p style={{color: circleColor}}>{text}</p>
        
    </Container>
}