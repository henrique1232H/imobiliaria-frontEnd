import { Container, Form } from "./style";
import InputForm from "../../components/InputForm"

export default function Add() {

    return (
        <Container>
            <main>
                <h1>Vamos criar um novo trabalho</h1>

                <Form>
                    <div>
                        <InputForm />
                    </div>

                </Form>
            </main>
        </Container>
    )
}