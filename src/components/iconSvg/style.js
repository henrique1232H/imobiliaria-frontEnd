import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;

    > span > h3 {
        font-weight: 400;
        color: ${({theme}) => theme.colors.primary[300]}

    }

    > svg {
        background: ${({theme}) => theme.colors.primary[100]};
        padding: 0.4rem;
        border-radius: 1rem;
    }

`