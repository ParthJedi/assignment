import React from "react";

const TransactionItem = ({ id, amount, transactionType }) => {
  return (
    <li key={id} className={`list-group-item`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">Time Stamp: {id}</span>
        <span className="d-flex align-items-center">Amount: {amount}</span>
        <span className="d-flex align-items-center">
          Type: {transactionType}
        </span>
      </div>
    </li>
  );
};

export default TransactionItem;
