import React from "react";
import PropTypes from "prop-types";
import figmaIcon from "../images/icons/figma.svg";

const SiteFavicon = ({ url }) => {
  //return <img src={`https://plus.google.com/_/favicon?domain=${url}`} alt="favicon" />;
  return <img src={figmaIcon} alt="favicon" className="mr-3" />;
};

SiteFavicon.propTypes = {};

export default SiteFavicon;
