/* eslint-disable react/prop-types */
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import { Content, Overlay, Trigger } from "./style"


export default function MenuInteressed({children, text}) {
    return (
        <AlertDialog.Root>
            <Trigger>
                    {text}
            </Trigger>

            <AlertDialog.Portal>
                <Overlay/>

                <Content>

                    <div>
                        <AlertDialog.Cancel>
                            Sair
                        </AlertDialog.Cancel>

                        {
                            children
                        }
                    </div>


                </Content>
            </AlertDialog.Portal>

        </AlertDialog.Root>
    )
}