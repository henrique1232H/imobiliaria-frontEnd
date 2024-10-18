import styled from "styled-components";

export const Container = styled.div`

    > main {
        display: grid;


        > div:nth-child(1) {
            > img {
                height: 40vh;
                width: 100%;

            }
        }

        > div:nth-child(2) {
            width: min(170rem, 90%);
            margin: -20rem auto 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);

            > section:nth-child(1) {

                width: 50rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 70vh;
                background: ${({theme}) => theme.COLOR.WHITE_100};
                border-radius: 1rem;
                padding: 3rem 0 ;


                > h2 {
                    margin-top: 1rem;
                    font-size: 1.5rem;
                    display: inline-flex;
                    align-items: center;
                    margin-bottom: 1rem;

                    > span {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 1rem;
                        padding: 0.3rem 1rem;
                        font-size: 1.3rem;
                        margin-left: 1rem;
                        gap: 0.5rem;
                        background: ${ ({theme, isAdmin}) => isAdmin === "admin" ? "#E3F909" : "#6215F1" };
                    }
                }

                > figure {
                    position: relative;
                    
                    > label {
                        position: absolute;
                        bottom: 0;
                        right: 2rem;
                        background: #fff;
                        
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 1rem 1.5rem;
                        border-radius: 10rem;
                        border: 1px solid #000;
                        cursor: pointer;
    
                    }
                    
                    > img {
                        border-radius: 15rem;
                        height: 30rem;
                    }
                }

                > input {
                    display: none;
                }
              
            }


            > section:nth-child(2) {
                width: 100%;
                margin-top: 20rem;
                grid-column-start: 2;
                grid-column-end: 4;

                > div {
                    > div {
                        background: ${({theme}) => theme.COLOR.WHITE_100};
                        padding: 1rem;
                        border-radius: 1rem;
                        border: 1px solid #ccc;
                        margin-bottom: 1rem;

                        > h2 {
                            color: ${({theme}) => theme.COLOR.BLUE_300}
                        }

                        > p {
                            font-size: 1.5rem;
                        }
                    }
                }
            }
        }


    }
`