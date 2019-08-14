import React from "react";
import SearchInput from "./SearchInput";
import ExportButton from "./ExportButton";
import HistoryList from "./HistoryList";

const Exporter = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 shadow-lg rounded py-6 px-12">
      <div className="flex justify-between">
        <SearchInput className="w-2/3" />
        <ExportButton />
      </div>
      <HistoryList />
    </div>
  );
};

export default Exporter;
