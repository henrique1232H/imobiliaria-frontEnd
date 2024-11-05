import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import { IoMdArrowBack } from "react-icons/io";

export default function GoBack({...rest}) {

    const navigate = useNavigate();

    function back() {
        navigate(-1)
    }


    return (
        <Container onClick={back} {...rest}>
            <IoMdArrowBack fontSize={20} />
        </Container>
    )

}