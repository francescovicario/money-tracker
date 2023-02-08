import styled from 'styled-components'

export const THContainer = styled.div`
    width: 50%;
    height: 60vh;
    margin-top: 1em; 
    padding-right: .5em;
    position: relative;

    &:first-of-type {
        border-right: 1px solid ${({ theme }) => theme.colors.placeholder};
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        height: 50vh;
        margin-top: 6.25em;
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        width: 100%;
        margin-top: 2em;
    }

`

export const THTitleContainer = styled.div`
    color: ${({ type , theme }) => type === 'income' ? theme.colors.incomes : theme.colors.expenses};
    padding: .25em;
    margin: 0 1em .75em;
    border: 1px solid  ${({ type , theme }) => type === 'income' ? theme.colors.incomes : theme.colors.expenses};
    border-radius: 10px;
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontSize.majorInfos};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        padding: 1em;
        margin: -1em 1em;
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        display: none;
    }

`

export const THTransactionsContainer = styled.div`
    height: 50vh;
    margin-top: 6em;
    overflow-x: hidden;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: .3em;
        padding-right: .2em;
    }
    &::-webkit-scrollbar-button {
        display: none;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.color}
    }

    h4 {
        color: ${({ theme }) => theme.colors.placeholder};
        margin-top: 20%;
        text-align: center;
        font-weight: ${({ theme }) => theme.fontWeight.regular};
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        height: 85%;
        margin-top: 4em;
        margin-bottom: 5em;
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        width: 100%;
        height: 110%;
        margin-top: -1.7em;
    }
`