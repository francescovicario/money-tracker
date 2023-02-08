import { configureStore } from '@reduxjs/toolkit';

import transactionsReducer from '../features/transactions/transactionsSlice'
import totalReducer from '../features/total/totalSlice'

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    total: totalReducer
  },
});
