/* eslint-disable react/prop-types */
import { Container, Content, Header, Item, Trigger } from "./style";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import transformDate from "../transformDate";

export default function Accordion({props}) {

    const date = new Date(Number(props.day));
    const hours = date.getHours();
    
    const minutes = date.getMinutes();
    let correctMinutes;

    if(minutes >= 0 && minutes < 10) {
        correctMinutes = `${minutes}0`
    } else {
        correctMinutes = minutes
    }


    const day = date.getDay();

    const transform = transformDate(day);

    return (
        <Container type="multiple" collapsible>
            <Item value="value-1">
                <Header>
                    <Trigger>
                        <div>
                            <h3>Informações do trabalho:</h3>

                            <FaChevronDown />
                        </div>
                    </Trigger>
                </Header>

                <Content>
                    <ul>
                        <li>
                            <div>
                                <h3>O dia da semana é {transform} </h3>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>Esse trabalho é um {props.job}</h3>
                            </div>
                        </li>

                        {
                            props.job === "Apartamento" 
                            && 
                            <li>
                                <div>
                                    <h3>A chave ficará com {props.apartment_keys}</h3>
                                </div>
                            </li>
                        }

                        {
                            props.job === "Apartamento" 
                            && 
                            <li>
                                <div>
                                    <h3>O bloco do apartamento é {props.apartment_block}</h3>
                                </div>
                            </li>
                        }

                        {
                            props.job === "Apartamento" 
                            && 
                            <li>
                                <div>
                                    <h3>O número do apartamento é {props.apartment_number}</h3>
                                </div>
                            </li>
                        }
                    </ul>
                </Content>
            </Item>

            <Item value="value-2">
                <Header>
                    <Trigger>
                        <div>
                            <h3>Horário:</h3>

                            <FaChevronUp />
                        </div>
                    </Trigger>
                </Header>

                <Content>
                    <ul>
                        <li>
                            <div>
                               <h3>A entrada é às: {hours}:{correctMinutes} <span><FaRegClock /></span></h3>
                            </div>
                        </li>

                        <li>
                            <div>
                                <h3>Horário que estará mais permitido a visita: {props.timeout} <span><FaRegClock color="red"/></span> </h3>
                            </div>
                        </li>
                    </ul>
                </Content>
            </Item>

            <Item value="value-3">
                <Header>
                    <Trigger>
                        <div>
                            <h3>Localização:</h3>

                            <FaChevronUp />
                        </div>
                    </Trigger>
                </Header>

                <Content>
                    <ul>
                        <li>
                            <div>
                                <h3>Cidade: {props.city}</h3>
                            </div>
                        </li>

                        <li>
                            <div>
                                <h3>Rua: {props.street}</h3>
                            </div>
                        </li>

                        <li>
                            <div>
                                <h3>Bairro: {props.district}</h3>
                            </div>
                        </li>

                        <li>
                            <div>
                                <h3>Estado: {props.state}</h3>
                            </div>
                        </li>

                        <li>
                            <div>
                                <h3>Ponto de referência: {props.referencePoint}</h3>
                            </div>
                        </li>

                    </ul>
                </Content>

            </Item>
            
        </Container>

    )
}