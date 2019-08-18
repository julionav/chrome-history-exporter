import React from "react";
import PropTypes from "prop-types";
import HistoryItem from "./HistoryItem";
import { searchHistory } from "../lib/history";

const ResultsCount = ({ count }) => (
  <h6 className="text-xs font-bold text-gray-600 mb-2">
    {count} RESULTS FOUND
  </h6>
);

const HistoryList = ({ query }) => {
  const historyItems = searchHistory(query);

  return (
    <div className="w-full mt-6" style={{ minHeight: "60vh" }}>
      <ResultsCount count={historyItems.length} />
      {historyItems.map((item, index) => (
        <HistoryItem index={index} key={index} {...item} />
      ))}
    </div>
  );
};

HistoryList.propTypes = {};

export default HistoryList;
