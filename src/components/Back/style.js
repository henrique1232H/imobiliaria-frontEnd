import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container = styled(Link)`

    background: none;
    border: none;
    width:2%;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.3rem;
    cursor: pointer;

    &:hover {
        background: #ccc;
    }

`