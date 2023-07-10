import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto,Helvetica Neue,Arial,sans-serif, "Work Sans";
}
html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
    /* 1rem = 10px */
    overflow-x: hidden;
}
#main{
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
body {
    background:${({ theme }) => theme.colors.bgbody}; 
}
footer{
    margin-top: auto;
    background:${({ theme }) => theme.colors.bgfooter};
    border-top:  ${({ theme }) => theme.colors.bdrline2};
}
h1 {
    color: ${({ theme }) => theme.colors.xtheading};
    font-size: 3.6rem;
    font-weight: 600;
}
h2 {
    color: ${({ theme }) => theme.colors.xtheading};
    font-size: 2.4rem;
    font-weight: 600;
    white-space: normal;
}
h3 {
    color: ${({ theme }) => theme.colors.xtheading};
    font-size: 1.8rem;
    font-weight: 600;
}
p, button {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight:400;
}

a {
    text-decoration: none;
}
li {
    list-style: none;
}
${"" /* resuable code section  */}
input, textarea{
    color: ${({ theme }) => theme.colors.black};
    border:  ${({ theme }) => theme.colors.bdrbtn1};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shdbtnxt};
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
    html {
        min-height: 100vh;
        font-size: 50%;
    }
    .cont_carousell{
    scale: 1.3 1;
    min-height: 30rem;
    .img-carousel{
        min-height: 30rem;
        height: 100%;
        width: 120%;
    }
}
}
`;
