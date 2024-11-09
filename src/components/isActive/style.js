import styled from "styled-components";

export const Container = styled.div`
    height: auto;
    display: block;
    padding: ${({card}) => card ? "1rem" : "0.5rem"};
    font-size: 1rem;
    border-radius: 2rem;
    text-align: center;
    width: ${({card}) => card ?? "10rem"};

`