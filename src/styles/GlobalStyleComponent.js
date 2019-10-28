import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap");
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    ul, ol {
        list-style: none;
    }
    h1, h2, h3, h4, h5 {
        margin: 0;
        font-weight: inherit;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        line-height: 1.4;
        position: relative;

        ${({ theme }) => `
            color: ${theme.colorGrey6};
            padding-bottom: ${theme.footerHeight};
        `}
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    button {
        cursor: pointer;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        &:focus{
            outline: none;
        }
        &:disabled{
            cursor: default;
        }
    }
    
    a, a:visited{
        color: inherit;
        text-decoration: none;
        display: inline-block;
    };

    .navLinkActive{
        &:after{
          transform: translateY(-50%) translateX(0);
        } 
    }
    .xxx{
        background: red;
    }
`
