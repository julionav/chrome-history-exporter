import React from "react";
import classNames from "classnames";

const Button = ({ className, ...rest }) => {
  className = classNames(className, "px-4 py-2 bg-primary text-white rounded");
  return <button className={className} {...rest} />;
};

Button.propTypes = {};

export default Button;
