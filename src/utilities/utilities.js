export const CATEGORIES = ['Select one...', 'Clothing', 'Education', 'Entertainment','Food', 'Healthcare', 'Housing', 'Personal', 'Transportation', 'Utilities']

export const todaysDate = (date) => {

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1

    return `${date.getFullYear()}-${month}-${day}`
}

export const setDateFormat = (date) => {

    const [year, month, day] = date.split('-');
    return `${day}/${month}/'${year.slice(2)}`;
}

export const options = { 
    year: '2-digit', 
    month: '2-digit', 
    day: '2-digit' 
}

export const amountFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
});

