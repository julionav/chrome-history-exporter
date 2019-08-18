import React, { useState } from "react";
import SearchInput from "./SearchInput";
import ExportButton from "./ExportButton";
import HistoryList from "./HistoryList";

const useField = initialValue => {
  const [field, setField] = useState(initialValue);

  const handleChange = event => setField(event.target.value);

  return [field, handleChange];
};

const Exporter = () => {
  const [searchQuery, handleSearchQuery] = useField("");

  return (
    <div className="max-w-3xl mx-auto mt-10 shadow-lg rounded py-6 px-12">
      <div className="flex justify-between">
        <SearchInput
          className="w-2/3"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        <ExportButton />
      </div>
      <HistoryList query={searchQuery} />
    </div>
  );
};

export default Exporter;
