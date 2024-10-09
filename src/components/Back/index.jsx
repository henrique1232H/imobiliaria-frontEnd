import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { IoMdArrowBack } from "react-icons/io";

export default function GoBack({...rest}) {


    return (
        <Container to="/" {...rest}>
            <IoMdArrowBack fontSize={20} />
        </Container>
    )

}