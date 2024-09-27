import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", system-ui;
    }

    :root {
        font-size: 62.5%;
    }

    h1 {
        font-size: 3rem;
        color: #0b4f76;
        font-weight: 800;
        line-height: 3.4rem;
    }

    h2 {
        font-size: 2.5rem;
    }
`