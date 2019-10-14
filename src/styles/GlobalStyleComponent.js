import { createGlobalStyle } from "@nfront/global-styles"

const GlobalStyleComponent = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');

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
        font-family: 'Playfair Display', serif;
        font-size: 1.6rem;
        line-height: 1.4;
        ${({ theme }) => `
            background-color: ${theme.colorGrey1};
            color: ${theme.colorGrey5};
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
`

export default GlobalStyleComponent
