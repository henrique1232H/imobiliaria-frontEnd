import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

    > nav {
        width: min(180rem, 90%);
        margin: 0 auto;

        > ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 2rem;
            padding: 2rem 0;

            > li {
                list-style: none;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            > li:nth-child(2) {
                width: 100%;
                
            }

            > li:last-child {
                display: flex;
                gap: 1rem;
            }
        }
    }
`

export const Navigation = styled(Link)`

    background: rgba(100,100,100, 0.5);
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    
`