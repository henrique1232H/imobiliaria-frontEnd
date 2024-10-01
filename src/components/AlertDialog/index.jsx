import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { IoMdExit } from "react-icons/io";
import { Trigger, Overlay, Content } from "./styles";
import { useAuth} from "../../hooks/auth"



export default function AlertDialogExit() {

    const {signOut } = useAuth();

    return (
        <AlertDialog.Root>
            <Trigger asChild>
                <IoMdExit  fontSize={20} color="#990c0c"/>
            </Trigger>

        <AlertDialog.Portal>

          <Overlay/>

          <Content>

            <div>
                <h1>
                    Você quer realmente sair?
                </h1>

                <p>
                    Se você sair terá que fazer login de novo.
                </p>

                

                <div>
                    <AlertDialog.Cancel>
                        Não quero sair
                    </AlertDialog.Cancel>
                    <AlertDialog.Action onClick={signOut}>
                        Desconectar da conta
                    </AlertDialog.Action>
                </div>
            </div>


          </Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    )
}