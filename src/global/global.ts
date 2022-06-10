import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color:#222;
        --color:#fff;
        --green-color: chartreuse;
        --secondary: #444;
        --terciary:#333;
        --red:#DB3A34;
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html, body, #root {
        height:100%;
        
    }

    body {
        background-color:var(--bg-color);
    }
`;
