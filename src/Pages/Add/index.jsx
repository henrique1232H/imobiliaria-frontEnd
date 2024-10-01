import { Container, Form } from "./style";
import InputForm from "../../components/InputForm"
import { useState } from "react";

export default function Add() {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    

    return (
        <Container>
            <main>
                <h1>Vamos criar um novo trabalho</h1>

                <Form>
                    <div>
                        <input placeholder="Nome" />
                    </div>

                </Form>
            </main>
        </Container>
    )
}