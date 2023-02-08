import styled, { css } from 'styled-components'

export const NTForm = styled.form`
    width: 60%;
    height: 100%;
    margin: auto;
    padding: .25em;
    display: grid; 
    grid-template-columns: 1fr 1.2fr .8fr; 
    grid-template-rows: 20% repeat(2, 1fr); 
    gap: 2px;
    grid-template-areas: 
        "title title title"
        "name date isIncome"
        "category amount button"; 

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        width: 100%;
        margin-top: -1.25em;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: .75fr 1.25fr 1.25fr;
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        height: 92.5%;
        padding-top: 12.5em;
        padding-bottom: 0;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 1fr);
        gap: .5px;
        grid-template-areas: 
            "title"
            "name" 
            "date" 
            "isIncome"
            "category" 
            "amount" 
            "button"; 
    }
`

export const NTTitleWrapper = styled.div`
    grid-area: title;
    color: ${({ theme }) => theme.colors.inputFields};
    padding-right: .5em;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.mainInfos};
    text-align: right;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        padding-top: .25em;
        padding-left: .5em;
        text-align: left;
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        display: none;
    }
`

export const NTInputContainer = styled.div`
    width: 90%;
    height: 90%;
    padding: .5em;

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        margin-top: -10em;
    }
    
    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        width: 95%;
        padding: 0;
    }
`

const inputCommonProperties = css`
    color: ${({ theme }) => theme.colors.color};
    background: inherit;
    color-scheme: dark;
    width: 100%;
    min-width: 135px;
    height: 80%;
    padding: .5em;
    margin: 9px; 
    border: 1px solid ${({ theme }) => theme.colors.inputFields};
    border-radius: 10px;
    font-size: ${({ theme }) => theme.fontSize.majorInfos};

    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        height: 80%;
        margin-bottom: 12.5em;
    }
`

export const NTInputsText = styled.input.attrs({type: 'text'})`
    ${inputCommonProperties}
    grid-area: name;
    background: ${({ theme }) => theme.colors.internalBackground};
`

export const NTInputsDate = styled.input`
    ${inputCommonProperties}
    grid-area: date;
`

export const NTIsIncomeButton = styled.div` 
    ${inputCommonProperties}
    grid-area: isIncome;
    color: ${({isIncome, theme}) => isIncome ? theme.colors.incomes : theme.colors.expenses};  
    padding: 0;
    border: 1px solid ${({isIncome, theme}) => isIncome ? theme.colors.incomes : theme.colors.expenses};  
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer */
    user-select: none;
    display: flex;
    text-align: center;
    justify-content: center;

    &:focus {
        color: ${({ theme }) => theme.colors.color};  
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        display: flex;
        text-align: center;
        align-items: center; 
    }
`

export const NTInputsCategory = styled.select`
    ${inputCommonProperties}
    grid-area: category;
    color: ${({ value, theme }) => value === 'Select one...' ? theme.colors.placeholder : theme.colors.color};

    option {
        color: ${({ theme }) => theme.colors.color};
        background: ${({ theme }) => theme.colors.internalBackground};
    }

`

export const NTInputsAmount = styled.input.attrs({type: 'number'})`
    ${inputCommonProperties}
    grid-area: amount;
`

export const NTButton = styled.button`
    ${inputCommonProperties}
    grid-area: button;
    color: ${({ theme }) => theme.colors.placeholder};
    transition: .3s;
    pointer-events: auto;

    &:hover, &:focus {
        color: ${({ theme }) => theme.colors.color};
        border: 1px solid ${({ theme }) => theme.colors.color};
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        transition: 0s;

        &:hover {
            border-color: initial;
        }
        
        &:active {
            color: ${({ theme }) => theme.colors.color};
            border: 1px solid ${({ theme }) => theme.colors.inputFields};
        }
    }
`