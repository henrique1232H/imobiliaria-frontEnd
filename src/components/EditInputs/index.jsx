/* eslint-disable react/prop-types */
import { Container } from "./style";
import { FaPencil } from "react-icons/fa6";

export default function EditInput({text, newText ,onChange, onClick, onBlur,isActive, paragraphy}) {

    return (
        <Container isActive={isActive}>

            

            {
                !paragraphy ?  <h1 onClick={onClick}> {newText === "" ? text : newText}  <FaPencil /> </h1>
                :
                <p onClick={onClick}> {newText === "" ? text : newText}  <FaPencil /> </p>
            }
            <div>
                <input type="text" onChange={onChange} onBlur={onBlur} placeholder={text}/>
            </div>
            
        </Container>
    )
}