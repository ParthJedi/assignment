import React from "react";
import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transaction.transactions);
  return (
    <ul className="list-group">
      Transactions:
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          id={transaction.id}
          amount={transaction.amount}
          transactionType={transaction.transactionType}
        />
      ))}
    </ul>
  );
};

export default TransactionList;
