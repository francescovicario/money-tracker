import React, { useState } from 'react'

import TransactionsHistory from '../transactionsHistory/TransactionsHistory'

import { IsIncomeMobileTabBar } from '../styles/Layout.styled'

export default function IncomeExpensePicker(){

    const [isIncomeMobile, setIsIncomeMobile] = useState(true)

    return (
        <>
            <IsIncomeMobileTabBar isSelected={isIncomeMobile}>
                <div onClick={() => setIsIncomeMobile(true)}>incomes</div>
                <div onClick={() => setIsIncomeMobile(false)}>expenses</div>
            </IsIncomeMobileTabBar> 
            {
                isIncomeMobile ?
                <TransactionsHistory type='income'/> : 
                <TransactionsHistory type='expense'/>
            }
        </>
    )
}
