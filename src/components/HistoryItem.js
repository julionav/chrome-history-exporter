import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import figmaIcon from "../images/icons/figma.svg";

const HistoryItem = ({ index }) => {
  const className = classNames("px-2 py-3 flex items-center", {
    "bg-light": index % 2 === 1
  });
  return (
    <div className={className}>
      <img src={figmaIcon} alt="favicon" className="mr-3" />
      <div className="flex-1 whitespace-no-wrap truncate">
        <span className="text-sm font-medium text-gray-700 mr-3">
          Chrome History Exporter - Figma
        </span>
        <span className="text-xs font-bold text-gray-600">
          https://www.figma.com/file/0HjdnriHnPs8gNxhdxHBMj/Casdasdazxcz
        </span>
      </div>
      <span className="text-xs font-bold text-gray-600 ml-8">24 visits</span>
    </div>
  );
};

HistoryItem.propTypes = {};

export default HistoryItem;
