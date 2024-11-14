import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    

    > h1 {
        display: ${({isActive}) => !isActive ? "flex" : "none"};
        cursor: pointer;
        align-items: center;

        > svg {
            font-size: 1.5rem;
            margin-left: 1rem;
        }
    }

    > p {
        display: ${({isActive}) => !isActive ? "flex" : "none"};
        cursor: pointer;
        align-items: center;
        font-weight: 500;


        > svg {
            font-size: 1.5rem;
            margin-left: 1rem;
        }
    }



    > div {
        display: ${({isActive}) => isActive ? "flex" : "none"};
        border-radius: 0.5rem;
        border: 1px solid #000;
        margin-top: 1rem;
        
        > input {
            padding: 0.5rem;

        }
    }

    
`