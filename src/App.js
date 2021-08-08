import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TotalAmount from "./components/TotalAmount";

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>Expense Tacker - Basic</h1>
      <TotalAmount />
      <TransactionForm />
      <TransactionList />
    </div>
  );
};

export default App;
