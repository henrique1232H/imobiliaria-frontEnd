import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background: #fff4;
    border-radius: 1rem;
    padding: 2rem;
    margin-top: 2rem;
    text-decoration: none;
    color: #000;
    display: block;
    box-shadow: 1px 1px 10px 1px #000;

    &:hover {
        border: 1px solid ${({theme}) =>  theme.COLOR.BLUE_200};
    }

    > h2 {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    > .icon{
        padding: 0.2rem 0;
        margin-bottom: 1rem;
    }

    > div > img  {
        height: 4rem;
        border-radius: 2rem;
    }

    > ul {
        margin-left: 1.6rem;
        margin-top: 0.5rem;
    }


    > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;

        > span {
            background: ${({theme}) => theme.COLOR.BLUE_100};
            padding: 1rem;
            border-radius: 2rem;
        }
    }
`