import styled from "styled-components";


export const Container = styled.div`
    border-radius: 1rem;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 3rem;

    background: ${({theme, isActive}) => isActive ? theme.COLOR.BLUE_200 : "none"};
    border-color:  ${({theme, isActive}) => !isActive ? "#000" : "none"};
    border-width: ${({theme, isActive}) => !isActive ? "1px" : "none"};
    border-style: ${({theme, isActive}) => !isActive ? "solid" : "none"};

    > svg {
        font-size: 15px;
        color: #fff;
    }
    
`