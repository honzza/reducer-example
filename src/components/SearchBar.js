import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export default function SearchBar({ searchText, handleSearchTextChange }) {
  return (
    <InputGroup
      type="text"
      className="mb-3"
      onChange={handleSearchTextChange}
      value={searchText}
    >
      <FormControl />
    </InputGroup>
  );
}
