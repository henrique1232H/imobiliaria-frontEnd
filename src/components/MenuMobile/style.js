import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 100vh;

    > nav {
        width: min(110rem, 90%);
        margin: 2rem auto;
        height: 100vh;
    }

    > nav > ul > li {
        display: flex;
        align-items: start;
        flex-direction: column;
    }

    > nav > ul {
        > li:first-child {
            display: flex;
            align-items: end;
            border-bottom: 2px solid #000;
            padding: 1rem 0;

            > button {
                background: none;
                cursor: pointer;
                border: none;
            }
        }
    }

    > nav > ul > div {
        > li {
            display: flex;
            align-items: end;

            > button {
                background: none;
                cursor: pointer;
                border: none;
            }
        }
    }

`
export const Navigation = styled(Link)`
    
    padding: 1rem 2rem;
    font-size: 2rem;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    transition: background 150ms ease-in-out;

    &:hover {
        background: #ccc;
    }

`