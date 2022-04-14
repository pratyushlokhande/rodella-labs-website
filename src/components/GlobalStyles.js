import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap'); */
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tourney:wght@100;400;500;600;700&display=swap');
    /* $header-font: 'Yeseva One', cursive; */
    
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100vh;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000;
        font-family: 'Source Code Pro', monospace;
        color: #29bf12;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    /* #drone {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100vh;
    } */
    
    h1 {
        font-size: 5rem;
        font-weight: 700;
        line-height: 1.2;
        margin-top: 2rem;
        text-transform: uppercase;
        display: flex;
        gap: 2rem;
        align-items: center;

        span {
            background-color: #29bf12;
            color: #000;
            display: block;
            padding: 0.5rem 1rem;
            width: fit-content;
        }
    }

    span {
        font-family: 'Tourney', cursive;
    }
`;

export default GlobalStyles;
