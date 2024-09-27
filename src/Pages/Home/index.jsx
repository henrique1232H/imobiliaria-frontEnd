import { Container, Image, RegisterNavigation, ButtonsDiv, SignInNavigation } from "./style";
import Header from "../../components/Header";
import Section from "../../components/Section";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <Container>

            <Header />

            <main>

            <Section>

                <div>

                    <div>
                        <h1>A melhor plataforma para você que é uma imobiliária ou para você fotografo.</h1>
                        

                        <p>Com o nosso site, você sempre vai ter o melhor possível para que sua equipe, ou você fotografo tenha o seu trabalho protegido.</p>


                        <ButtonsDiv>
                            <RegisterNavigation to="/signIn">
                                Entrar
                            </RegisterNavigation>

                            <SignInNavigation to="/register">
                                Cadastrar
                            </SignInNavigation>
                        </ButtonsDiv>

                    </div>

                    <figure>
                        <Image src="https://picsum.photos/600/600" alt="imagem ilustrativa" />

                        <figcaption>imagem ilustrativa</figcaption>
                    </figure>

                </div>
            </Section>

            <Section>

                <div>
                    <h2>Com funcionamento simples para você ir aonde quer de forma fácil</h2>


                    <ol>
                        <li>ass</li>
                        <li>asas</li>
                    </ol>
                </div>

            </Section>

            
            </main>

        </Container>
    )
}