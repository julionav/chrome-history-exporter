import React from "react";

const PrinterIcon = () => (
  <svg
    className="fill-current h-8 w-8 ml-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path
      class="heroicon-ui"
      d="M18 18v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2H4a2 2 0 0 1-2-2v-6c0-1.1.9-2 2-2h2V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v4h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2zm0-2h2v-6H4v6h2v-2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v2zm-2-8V4H8v4h8zm-8 6v6h8v-6H8z"
    />
  </svg>
);

const Navbar = props => {
  return (
    <div className="bg-primary py-6 w-full">
      <div className="container mx-auto text-white text-2xl flex items-center">
        Chrome History Exporter <PrinterIcon />
      </div>
    </div>
  );
};

export default Navbar;
