import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransaction, debitTransaction } from "../redux/transactionSlice";

const TransactionForm = () => {
  const [value, setValue] = useState(0);
  const tranactionArray = useSelector(
    (state) => state.transaction.transactions
  );
  const dispatch = useDispatch();
  const handleDebit = (event) => {
    event.preventDefault();
    if (!isNaN(value)) {
      dispatch(
        debitTransaction({
          value: parseInt(value),
        })
      );
    } else alert("Not a Number!");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(value)) {
      dispatch(
        addTransaction({
          value: parseInt(value),
        })
      );
    } else alert("Not a Number!");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      {tranactionArray.length !== 0 ? (
        <label className="sr-only">Transaction</label>
      ) : (
        ""
      )}
      <input
        type="number"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add transaction amount..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button type="submit" className="btn btn-primary mb-2">
        Add Amount
      </button>
      &nbsp;
      <button
        type="reset"
        className="btn btn-primary mb-2"
        onClick={handleDebit}
      >
        Remove Amount
      </button>
    </form>
  );
};

export default TransactionForm;
