import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,600&display=swap");
    @import url("https://fonts.googleapis.com/css?family=Ubuntu:400,500&display=swap");
    @import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");

    ::-webkit-scrollbar{
        display: none;
    }
    :root{
        --vertical-padding: 10rem;
        --vertical-padding-small: 5rem;
        --body-padding: 1rem;
        ${({ theme }) => theme.media.big`
            --vertical-padding: 5rem;
            --vertical-padding-small: 2.5rem;
        `}
        ${({ theme }) => theme.media.small`
            --vertical-padding: 2.5rem;
            --body-padding: 0rem;
        `}
    }

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
        ${({ theme }) => theme.media.big`
            font-size: 50%;
        `}
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        line-height: 1.4;
        position: relative;
        overflow-x: hidden;
        ${({ theme }) => `
          color: ${theme.colorGrey6};
          padding: 0 0 ${theme.footerHeight} 0;
          background-color: ${theme.colorGrey1};
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

        &::-moz-focus-inner {
            border: 0;
        }
    }
    
    a, a:visited{
        color: inherit;
        text-decoration: none;
        display: inline-block;
        &:focus{
            outline: none;
        }
    };

    a::-moz-focus-inner {
        border: 0;
    }

    .navLinkActive{
        &:after{
            transform: translateX(0);
            left: 0;
        } 
    }

    main{
       min-height: 100vh;
       ${({ theme }) => `
        background: ${theme.colorGrey2}
      `}
    }

    input, textarea, select {
        font-family: inherit;
        &:focus{
            outline: none;
        }
    }
`
