import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import SiteFavicon from "./SiteFavicon";

const HistoryItem = ({ index, title, url, visitCount }) => {
  const className = classNames("px-2 py-3 flex items-center", {
    "bg-light": index % 2 === 1
  });
  return (
    <div className={className}>
      <SiteFavicon />
      <div className="flex-1 whitespace-no-wrap truncate">
        <span className="text-sm font-medium text-gray-700 mr-3">{title}</span>
        <span className="text-xs font-bold text-gray-600">{url}</span>
      </div>
      <span className="text-xs font-bold text-gray-600 ml-8">{visitCount} visits</span>
    </div>
  );
};

HistoryItem.propTypes = {};

export default HistoryItem;
