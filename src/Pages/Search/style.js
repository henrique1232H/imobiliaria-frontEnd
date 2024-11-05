import styled from "styled-components";

export const Container = styled.div`

    > main {

        width: min(180rem, 90%);
        margin: 0 auto;
        height: 82.3vh;
        
        > section:nth-child(1) {
            margin-top: 4rem;
            
            > input {
                width: 100%;
                border-radius: 1rem;
                border: 1px solid #000;
                outline: none;
                padding: 1rem;
                
                
            }
            
            > input:focus {
                border: 1px solid ${({theme}) => theme.COLOR.BLUE_200};
            }
            
        }

        > section:nth-child(2) {
            overflow-y: auto;
            height: 100%;
            padding: 0 0.5rem 10rem 0.5rem;

        }
    }

`