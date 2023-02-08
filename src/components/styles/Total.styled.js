import styled from 'styled-components'

export const TCContainer = styled.div`
    width: 40%;
    height: 100%;
    padding: 1em;
    line-height: .5em;
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 20% 60% 20%; 
    gap: 10px; 
    grid-template-areas: 
        "title"
        "budget"
        "recap"; 

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        width: 100%;
        padding-bottom: 3em;
        margin: 0 auto;
        grid-template-rows: 25% 50% 25%; 
        gap: 20px;
    }
`

export const TCTitle = styled.div`
    grid-area: 'title';
    color: ${({ theme}) => theme.colors.total};
    font-size: ${({ theme }) => theme.fontSize.mainInfos};
    
    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        margin-top: .5em;
    }
`

export const TCBudget = styled.div`
    grid-area: 'budget';
    padding-top: .5em;
    font-size: ${({ theme }) => theme.fontSize.total}; 
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        padding: .2em 0;
        text-align: center;
    }
`

export const TCRecap = styled.div`
    grid-area: 'recap';
    font-size: ${({ theme }) => theme.fontSize.majorInfos};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    
    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        padding-top: .2em;
        text-align: center;
    }
`