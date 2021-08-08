import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const total = useSelector((state) => state.transaction.totalAmount);
  return <h4 className="mt-3">Balance: {total}</h4>;
};

export default TotalCompleteItems;
