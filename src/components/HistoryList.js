import React from "react";
import PropTypes from "prop-types";
import HistoryItem from "./HistoryItem";

const ResultsCount = ({ count }) => (
  <h6 className="text-xs font-bold text-gray-600 mb-2">{count} RESULTS FOUND</h6>
);

const HistoryList = props => {
  return (
    <div className="w-full mt-6">
      <ResultsCount count={53} />
      {[...Array(10)].map((_, index) => (
        <HistoryItem index={index} key={index} />
      ))}
    </div>
  );
};

HistoryList.propTypes = {};

export default HistoryList;
