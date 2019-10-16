import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap'); */
    @import url('https://fonts.googleapis.com/css?family=Merriweather:300,400,700&display=swap');

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
    }
    html {
        font-size: 62.5%;
    }

    body {
        /* font-family: 'Playfair Display', serif;
         */
        font-family: 'Merriweather', serif;
        font-size: 1.6rem;
        line-height: 1.4;
        position: relative;
        ${({ theme }) => `
            padding-right: ${theme.navigationWidth};
            padding-bottom: ${theme.footerHeight};
            color: ${theme.colorGrey6};

            &:after{
            content: "";
            position: absolute;
            top:0;
            right: 0;
            height: calc(100% - ${theme.footerHeight});
            width: ${theme.navigationWidth};
            background-color: ${theme.colorGrey1};
        }
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
`
