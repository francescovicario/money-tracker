import React from 'react';
import { useSelector } from 'react-redux'

import { amountFormatter } from '../../utilities/utilities'

import { 
    TCContainer, 
    TCTitle, 
    TCBudget, 
    TCRecap 
} from '../../components/styles/Total.styled'

function Total(){
    const incomes = useSelector(state => state.total.incomes)
    const expenses = useSelector(state => state.total.expenses)
    const total = incomes - expenses

    return (
        <TCContainer>
            <TCTitle>TOTAL:</TCTitle>
            <TCBudget>{amountFormatter.format(total)}</TCBudget>
            <TCRecap>{amountFormatter.format(incomes)}  |  {amountFormatter.format(expenses)}</TCRecap>
        </TCContainer>
    )
}

export default Total