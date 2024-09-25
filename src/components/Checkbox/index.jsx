import { Container } from "./style";
import { AiOutlineCheck } from "react-icons/ai";

export default function CheckBox({isActive, onClick}) {


    return (
        <Container isActive={isActive} onClick={onClick}>

            {
                isActive ? <AiOutlineCheck/> : ""
            }

        </Container>
    )
}