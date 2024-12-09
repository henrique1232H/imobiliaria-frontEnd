/* eslint-disable react/prop-types */
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Container, Navigation } from "./style";
import Dialog from "../AlertDialog";
import { IoMdClose } from "react-icons/io";

export default function MenuMobile({isActive}) {
  const { user, signOut } = useAuth();


  return (
    <Container>
      <nav>
        <ul>

            <li>
                <button onClick={isActive}>
                    <IoMdClose fontSize="2rem" />
                </button>
            </li>

          {!user ? (

            <div>
                <li>
                    <Navigation to="/signIn">Entrar</Navigation>
                </li>
                <li>
                    <Navigation to="/register">cadastrar</Navigation>
                </li>
            </div>
          ) : [USER_ROLE.ADMIN].includes(user.role) ? (
            <li>
              <Navigation to="/search">Procurar trabalhos</Navigation>

              <Navigation to="/">Ver seus trabalhos</Navigation>

              <Navigation to="/add">Adicionar um novo trabalho</Navigation>

              <Navigation to="/profile">
                Visitar o Perfil
              </Navigation>

              <Dialog
                props={{ fontSize: 20, color: "none", colorText: "red"}}
                isActive
                title="Você quer realmente sair?"
                text={"Sair da conta"}
                description="Se você sair terá que fazer login de novo."
                action={signOut}
                optionOne="Não quero sair"
                optionTwo="Desconectar da conta"
              />
            </li>
          ) : (
            [USER_ROLE.CUSTOMER].includes(user.role) && (
              <li>
                <Navigation to="/search">Procurar trabalhos</Navigation>

                <Navigation to="/">
                  Trabalhos que você se candidatou
                </Navigation>

                <Navigation to="/profile">
                  Visitar o perfil
                </Navigation>

                <Dialog
                props={{ fontSize: 20, color: "none", colorText: "red"}}
                isActive
                title="Você quer realmente sair?"
                text={"Sair da conta"}
                description="Se você sair terá que fazer login de novo."
                action={signOut}
                optionOne="Não quero sair"
                optionTwo="Desconectar da conta"
              />


              </li>
            )
          )}
        </ul>
      </nav>
    </Container>
  );
}
