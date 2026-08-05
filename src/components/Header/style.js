import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`

    display: flex;
    width: 100%;
    background: #fff;

    > nav {

        width: min(180rem, 70%);
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
                display: flex;
                gap: 1rem;
            }

            > li:last-child {
                display: none;
            }

            @media (max-width: 990px ) {

                > li:nth-child(2) {
                    display: none;
                }

                > li:last-child {
                    display: flex;
                    
                    > svg {
                        font-size: 3rem;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`

export const Navigation = styled(Link)`

    
    padding: 1rem 2rem;
    border-radius: 1rem;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    
`