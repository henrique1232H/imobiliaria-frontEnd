import styled from "styled-components";


export const Container = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: center;

    border-style: solid;
    border-width: 1px;
    border-color: ${({isActive}) => !isActive ? "#ccc" : "#000"};
    
    border-top: none;
    border-left: none;
    border-right: none;


    

    > svg {
        color: ${({isActive}) => !isActive ? "#ccc" : "#000"};
        font-size: 12px;
    }

    


    > input {
        width: 100%;
        border: none;
        padding: 1rem 0.3rem;
        outline: none;
    }

    > input::placeholder {
        color: ${({isActive}) => !isActive ? "#ccc" : "#000"};
    }


`