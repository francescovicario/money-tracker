import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { todaysDate, setDateFormat, CATEGORIES } from '../../utilities/utilities'
import { ScreenWidthContext } from '../../app/App'

import { addTransaction } from './transactionsSlice';
import { addAmount } from '../total/totalSlice';

import { 
    NTForm, 
    NTTitleWrapper, 
    NTInputContainer,
    NTInputsText,
    NTInputsDate,
    NTIsIncomeButton,
    NTInputsCategory,
    NTInputsAmount,
    NTButton 
} from '../../components/styles/NewTransaction.styled'

export default function NewTransaction(props){

    const dispatch = useDispatch();
    const screenWidth = useContext(ScreenWidthContext)
    
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [isIncome, setIsIncome] = useState(true);
    const [amount, setAmount] = useState('');
    
    const [isIsIncomeFocused, setIsIsIncomeFocused] = useState(false);
    const [isDateText, setIsDateText] = useState(false);
    
    const [nameValid, setNameValid] = useState(true);
    const [dateValid, setDateValid] = useState(true);
    const [categoryValid, setCategoryValid] = useState(true);
    const [amountValid, setAmountValid] = useState(true);

    const maxDate = todaysDate(new Date())

    const setBorderColor = (valid) => {
        return {
            border: !valid && '1px solid red'
        }
    }

    const handleDateOnFocus = (e) => {
        e.target.type = "date"
        e.target.value = date
        setDateValid(true)
        setIsDateText(false)
    }
    
    const handleDateOnBlur = (e) => {
        e.target.type = "text"
        e.target.value = (!date) ? '' : setDateFormat(date)
        setDateValid(e.target.value.length > 0)
        setIsDateText(true)
    }

    const handleKeyPress = (e) => {
        if (e.key === " " && isIsIncomeFocused) {
            e.preventDefault()
            setIsIncome(!isIncome)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !date || !amount || category === CATEGORIES[0]) {
            !name && setNameValid(false)
            !date && setDateValid(false)
            !amount && setAmountValid(false)
            category === CATEGORIES[0] && setCategoryValid(false)
        } else {
            dispatch(addTransaction({
                name: name,
                date: date,
                category: category,
                isIncome: isIncome,
                amount: amount,
                id: nanoid()
            }));
            
            dispatch(addAmount({
                isIncome: isIncome,
                amount: amount
            }));
            
            screenWidth < 768 && props.isHistory()
            setName('')
            setDate('')
            setCategory(CATEGORIES[0])
            setAmount('')
        }
    };

    return (
        <NTForm onSubmit={handleSubmit}>
            <NTTitleWrapper>ADD TRANSACTION</NTTitleWrapper>
            <NTInputContainer>
                <NTInputsText 
                    id='name' 
                    tabIndex='1'
                    value={name}
                    placeholder="Description"
                    style={setBorderColor(nameValid)} 
                    onFocus={() => setNameValid(true)}
                    onBlur={e => setNameValid(e.target.value.length > 0)}
                    onChange={e => setName(e.target.value)}
                />
            </NTInputContainer>
            <NTInputContainer>
                <NTInputsDate 
                    id='date' 
                    tabIndex='2'
                    max={maxDate} 
                    value={!isDateText ? date : date ? setDateFormat(date) : ''} 
                    placeholder={'Date'}
                    style={setBorderColor(dateValid)} 
                    onFocus={e => handleDateOnFocus(e)}
                    onBlur={e => handleDateOnBlur(e)}
                    onChange={e => setDate(e.target.value)}
                />
            </NTInputContainer>
            <NTInputContainer>
                <NTIsIncomeButton 
                    tabIndex='3'
                    role='button'
                    onFocus={() => setIsIsIncomeFocused(true)}
                    onBlur={() => setIsIsIncomeFocused(false)}
                    onKeyDown={handleKeyPress}
                    onClick={() => setIsIncome(!isIncome)} 
                    isIncome={isIncome}
                >
                    <p>{isIncome ? 'INCOME' : 'EXPENSE'}</p>
                </NTIsIncomeButton>
            </NTInputContainer>
            <NTInputContainer>
                <NTInputsCategory 
                    id="category"
                    tabIndex='4' 
                    value={category} 
                    style={setBorderColor(categoryValid)} 
                    onFocus={() => setCategoryValid(true)}
                    onBlur={(e) => setCategoryValid(e.target.value !== CATEGORIES[0])}
                    onChange={(e) => setCategory(e.target.value)} 
                >
                    {CATEGORIES.map((c, index) => (
                        !index ?
                        <option key={c} value={c} hidden defaultValue>
                            {c}
                        </option> :
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </NTInputsCategory>
            </NTInputContainer>
            <NTInputContainer>
                <NTInputsAmount 
                    id="amount"
                    placeholder="Amount"
                    tabIndex='5' 
                    step="0.01" 
                    min="0.01" 
                    value={amount} 
                    style={setBorderColor(amountValid)} 
                    onFocus={() => setAmountValid(true)}
                    onBlur={e => setAmountValid(e.target.value.length > 0)}
                    onChange={e => setAmount(e.target.valueAsNumber)}
                />
            </NTInputContainer>
            <NTInputContainer>
                <NTButton tabIndex='6'>ADD</NTButton>
            </NTInputContainer>
        </NTForm>
    )
}
