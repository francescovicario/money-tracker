import React from 'react'
import { useDispatch } from 'react-redux';

import { removeTransaction } from '../../features/transactions/transactionsSlice'
import { removeAmount } from '../../features/total/totalSlice'

import { 
    amountFormatter, 
    setDateFormat 
} from '../../utilities/utilities'

import { 
    STGeneralContainer, 
    STMajorInfosContainer, 
    STMinorInfosContainer, 
    STMinorInfosWrapper, 
    STDeleteBtn 
} from '../styles/SingleTransaction.styled'

function SingleTransaction(props){
    const {name, amount, isIncome, category, date, id, type} = props
    const dispatch = useDispatch()

    function removeTransactionDispatch(id, isIncome, amount){
        dispatch(removeTransaction(id))
        dispatch(removeAmount({isIncome, amount}))
    }

    return (
        <STGeneralContainer type={type}>
            <STMajorInfosContainer>
                <h3>{name}</h3>
                <h3>{amountFormatter.format(amount)}</h3>
            </STMajorInfosContainer>
            <STMinorInfosContainer>
                <STMinorInfosWrapper>
                    <p>{category}</p>
                    <p>{setDateFormat(date)}</p>
                </STMinorInfosWrapper>
                <STDeleteBtn onClick={() => removeTransactionDispatch(id, isIncome, amount)}/>
            </STMinorInfosContainer>
        </STGeneralContainer>
    )
}

export default SingleTransaction