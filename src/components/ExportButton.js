import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ExportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="fill-current mr-2"
  >
    <path
      className="heroicon-ui"
      d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"
    />
  </svg>
);

const ExportButton = props => {
  return (
    <Button {...props} className="flex items-center">
      <ExportIcon />
      Export
    </Button>
  );
};

ExportButton.propTypes = {};

export default ExportButton;
