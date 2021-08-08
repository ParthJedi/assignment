import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    totalAmount: 0,
    transactions: [],
  },
  reducers: {
    addTransaction: (state, action) => {
      let dateTime = new Date();
      dateTime = dateTime.toISOString();
      const newTransaction = {
        id: dateTime,
        amount: action.payload.value,
        transactionType: "Add",
      };
      state.totalAmount += parseInt(action.payload.value);
      state.transactions.push(newTransaction);
    },
    debitTransaction: (state, action) => {
      let dateTime = new Date();
      dateTime = dateTime.toISOString();
      const newTransaction = {
        id: dateTime,
        amount: action.payload.value,
        transactionType: "Remove",
      };
      state.totalAmount -= parseInt(action.payload.value);
      state.transactions.push(newTransaction);
    },
  },
});

export const { addTransaction, debitTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
