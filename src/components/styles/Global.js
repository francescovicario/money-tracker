import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;

        @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
            margin: 0;
        }
    }

    body {
        font-family: 'Rubik', Arial, Helvetica, sans-serif;
        color: ${({ theme }) => theme.colors.color};
        background: ${({ theme }) => theme.colors.externalBackground};
        height: 100vh;
        overflow-y: hidden;

        @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`