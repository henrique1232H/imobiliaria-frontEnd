import styled from "styled-components";
import * as Accordion from "@radix-ui/react-accordion";

export const Container = styled(Accordion.Root)`
    border: 1px solid #ccc;
    border-radius: 1rem;

`

export const Header = styled(Accordion.AccordionHeader)`
    display: flex;
`

export const Item = styled(Accordion.Item)`
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const Trigger = styled(Accordion.Trigger)`
    background: none;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 1rem 3rem;

    &:hover {
        background: ${({theme}) => theme.COLOR.WHITE_100};
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 1.5rem;
        font-weight: 600;
        color: ${({theme}) => theme.COLOR.BLUE_200};
    }

`

export const Content = styled(Accordion.Content)`

    padding: 1rem 2rem;

    > ul > li {
        margin-left: 1.7rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #ccc;
        
        > div {
            display: flex;
            align-items: center;
            justify-content: start;
            padding: 1rem 0;
            
            > h3 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
            }
        }
    }

`