import { TypeOfJobContainer } from "./style"



export default function TypeOfJob({props}) {
    
    return (
        <TypeOfJobContainer> {(props).toUpperCase()}</TypeOfJobContainer>
    )


}