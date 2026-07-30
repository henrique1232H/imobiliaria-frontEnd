import {
  Container,
  Image,
  RegisterNavigation,
  ButtonsDiv,
  SignInNavigation,
} from "./style";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Section>
          <div>
            <div>
              <h1>
                A melhor plataforma para você que é uma imobiliária ou para você
                fotografo.
              </h1>

              <p>
                Com o nosso site, você sempre vai ter o melhor possível para que
                sua equipe, ou você fotografo tenha o seu trabalho protegido.
              </p>

              <ButtonsDiv>
                <RegisterNavigation to="/signIn">Entrar</RegisterNavigation>

                <SignInNavigation to="/register">Cadastrar</SignInNavigation>
              </ButtonsDiv>
            </div>

            <figure>
              <Image
                src="https://picsum.photos/600/600"
                alt="imagem ilustrativa"
              />

              <figcaption>imagem ilustrativas</figcaption>
            </figure>
          </div>
        </Section>

        <Section>
          <div>
            <h2>
              Com funcionamento simples para você ir aonde quer de forma fácil.
            </h2>

            <ul>
              <li>
                <h3>abraço</h3>
              </li>
              <li>
                <h3>beijos</h3>
              </li>

              <li>
                <h3>tristeza</h3>
              </li>
            </ul>
          </div>
        </Section>

        <Section>
          <div>
            <Image
                src="https://picsum.photos/900/600"
                alt=""
              />

            <div>
              <h2>Aqui o funcionamento fácil e simples de resolver</h2>

            </div>

          </div>
        </Section>
      </main>

      <Footer />
    </Container>
  );
}
