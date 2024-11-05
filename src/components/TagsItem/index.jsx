/* eslint-disable react/prop-types */
import { Container } from "./style";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai"

export default function TagItem({value,isNew = false, onClick, onChange, ...rest}) {
    return (
        <Container isNew={isNew}>
            <input
                type="text"
                value={value}
                onChange={onChange}
                {...rest}
            />
            
    
            <button
                type="button"
                onClick={onClick}
            >
                {
                    isNew ? <AiOutlineClose /> : <AiOutlineCheck />
                }
            </button>
        </Container>
    )
}