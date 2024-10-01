import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { IoMdArrowBack } from "react-icons/io";

export default function GoBack({...rest}) {


    return (
        <Container {...rest}>
            <IoMdArrowBack fontSize={20} />
        </Container>
    )

}