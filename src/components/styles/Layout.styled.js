import styled from 'styled-components'

export const MainContainer = styled.main`
    background: ${({ theme }) => theme.colors.internalBackground};
    width: 90%;
    height: 97vh;
    padding: 1em 2em;
    margin: 0 auto;
    border-radius: 10px;
    
    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        background: ${({ theme }) => theme.colors.externalBackground};
        width: 100%;
        height: 100vh;
        padding: 1em;
        margin-bottom: -1em;
    }
`

export const TrackerUpperContainer = styled.div`
    background: ${({ theme }) => theme.colors.internalBackground};
    width: 100%;
    min-width: 365px;
    height: 30%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.placeholder};
    display: flex;
    flex-direction: row;
    
    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        flex-direction: column;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        border-bottom: none;
    }
`

export const TrackerLowerContainer = styled(TrackerUpperContainer)`
    height: 70%;
    border: none;
    
    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        padding-top: 2em;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        flex-direction: row;
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}){
        padding-top: 0;
        flex-direction: column;
    }
`

export const IsHistoryTabBar = styled.div`
    font-size: ${({ theme }) => theme.fontSize.majorInfos};
    display: flex;
    flex-direction: row;
    
    div {
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        transition: .2s;
        
        &:first-of-type {
            color: ${({ isSelected, theme }) => isSelected ? theme.colors.total : theme.colors.color};
            width: ${({ isSelected }) => isSelected ? '40%' : '45%'};
            border-right: 1px solid ${({ isSelected, theme }) => isSelected ? theme.colors.total : theme.colors.inputFields};
            ${({ isSelected, theme }) => isSelected && `border-top: 1px solid ${theme.colors.total}`};
            ${({ isSelected, theme }) => !isSelected && `border-bottom: 1px solid ${theme.colors.inputFields}`};
        }
        
        &:last-of-type {
            color: ${({ isSelected, theme }) => !isSelected ? theme.colors.inputFields : theme.colors.color};
            width: ${({ isSelected }) => !isSelected ? '55%' : '60%'};
            ${({ isSelected, theme }) => !isSelected && `border-top: 1px solid ${theme.colors.inputFields}`};
            ${({ isSelected, theme }) => isSelected && `border-bottom: 1px solid ${theme.colors.total}`};
        }
    }

`

export const IsIncomeMobileTabBar = styled(IsHistoryTabBar)`
    margin: .35em 0 .5em;

    div {
        border-top: none;
        
        &:first-of-type {
            color: ${({ isSelected, theme }) => isSelected ? theme.colors.incomes : theme.colors.color};
            width: 50%;
            border-top: none;
            border-right: 1px solid ${({ isSelected, theme }) => isSelected ? theme.colors.incomes : theme.colors.expenses};
            border-bottom: none;
        }
        
        &:last-of-type {
            color: ${({ isSelected, theme }) => !isSelected ? theme.colors.expenses : theme.colors.color};
            width: 50%;
            border-top: none;
            border-bottom: none;
        }
    }
`