import React from 'react';
import { useSelector } from 'react-redux'

import SingleTransaction from './SingleTransaction'
import { THContainer, THTitleContainer, THTransactionsContainer } from '../styles/TransactionsHistory.styled'

function TransactionsHistory(props){

        const transactions = useSelector(state => state.transactions)
        const { type } = props

        const filteredTransactions = type === 'income' ? 
                transactions.filter(item => item.isIncome) : 
                transactions.filter(item => !item.isIncome)

        return (
                <THContainer>
                        <THTitleContainer type={type}><p>{type}s</p></THTitleContainer>
                        <THTransactionsContainer type={type}>
                                {
                                        !filteredTransactions.length ? 
                                        <h4>No {type}s tracked yet. Add your first!</h4> :
                                        filteredTransactions.sort((a, b) => Date.parse(b.date) - Date.parse(a.date)).map(transaction => {
                                                const {name, amount, isIncome, category, date, id} = transaction
                                                return <SingleTransaction 
                                                                type={type}
                                                                name={name} 
                                                                amount={amount} 
                                                                isIncome={isIncome} 
                                                                category={category} 
                                                                date={date}
                                                                id={id}
                                                                key={id}
                                                        />
                                        })
                                }
                        </THTransactionsContainer>
                </THContainer>
        )
}

export default TransactionsHistory