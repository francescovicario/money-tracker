import React, { useState } from 'react'

import Total from '../../features/total/Total'
import NewTransaction from '../../features/transactions/NewTransaction'
import IncomeExpensePicker from '../transactionsHistory/IncomeExpensePicker'

import { 
    TrackerUpperContainer, 
    TrackerLowerContainer,
    IsHistoryTabBar 
} from '../styles/Layout.styled'

export default function Mobile(){

    const [isHistory, setIsHistory] = useState(true)
    const handleIsHistory = () => setIsHistory(true)

    return (
        <>
            <TrackerUpperContainer>
                <Total />
            </TrackerUpperContainer>
            <TrackerLowerContainer>
                <IsHistoryTabBar isSelected={isHistory}>
                    <div onClick={() => setIsHistory(true)}>history</div>
                    <div onClick={() => setIsHistory(isHistory => !isHistory)}>add transaction</div>
                </IsHistoryTabBar>
                {isHistory ? <IncomeExpensePicker /> : <NewTransaction isHistory={handleIsHistory}/>} 
            </TrackerLowerContainer>
        </>
    )
}
