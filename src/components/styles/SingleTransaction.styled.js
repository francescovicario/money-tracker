import styled from 'styled-components'

export const STDeleteBtn = styled.div`
    height: 15px;
    width: 15px;
    margin: -.25em 0;
    position: relative;
    display: none;
    
    &::before,
    &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px; 
        background-color: ${({ theme }) => theme.colors.color};
    }
    
    &::before {
        transform: rotate(45deg);
    }
    
    &::after {
        transform: rotate(-45deg);
    }
`

export const STGeneralContainer = styled.div`
    padding: .25em .75em;
    margin: 0 1.5em .75em;
    border: 1px solid ${({ theme, type }) => type === 'income' ? theme.colors.incomes : theme.colors.expenses};
    border-radius: 10px;

    &:hover {
        ${STDeleteBtn} {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){

        &:active{
            ${STDeleteBtn} {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }
    }
`

export const STMajorInfosContainer = styled.div`
    margin: -.25em 0;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    h3 {
        font-size: ${({ theme }) => theme.fontSize.majorInfos};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }

    p {
        font-size: ${({ theme }) => theme.fontSize.minorInfos};
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        margin: .5em;
    }
`

export const STMinorInfosContainer = styled(STMajorInfosContainer)`
    text-transform: none;
    
    p {
        margin-top: -.5em;
        margin-right: 3em;
        font-weight: ${({ theme }) => theme.fontWeight.regular};
    }
    
    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}){
        margin: .75em .5em .5em;
    }
`


export const STMinorInfosWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
`
