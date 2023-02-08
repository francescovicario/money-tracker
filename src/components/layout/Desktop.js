import React from 'react'

import Total from '../../features/total/Total'
import NewTransaction from '../../features/transactions/NewTransaction'
import TransactionsHistory from '../transactionsHistory/TransactionsHistory'

import { TrackerUpperContainer, TrackerLowerContainer } from '../styles/Layout.styled'

export default function Desktop(){

    return (
        <>
            <TrackerUpperContainer>
                <Total />
                <NewTransaction />
            </TrackerUpperContainer>
            <TrackerLowerContainer>
                <TransactionsHistory type='income'/>
                <TransactionsHistory type='expense'/>
            </TrackerLowerContainer>
        </>
    )
}
