import * as Toast from "@radix-ui/react-toast";
import { Container } from "./style";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";


export default function Toast({title, description}) {

    return (
        <Container>
            <Toast.Root>
                <Toast.Title>
                    {title}
                </Toast.Title>

                <Toast.Description>
                    {description}
                </Toast.Description>

                <Toast.Close>
                    <MdOutlineRemoveCircleOutline fontSize={20} color="red"/>
                </Toast.Close>

            </Toast.Root>


            <Toast.ToastViewport />
        </Container>
    )
}