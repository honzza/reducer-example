import React, { useReducer } from "react";
import { Container } from "react-bootstrap";
import SearchBar from "./SearchBar";
import List from "./List";

const DUMMY_DATA = ["robot", "auto", "text3", "text6", "automobil", "rosa"];

export default function FilterSearchBar() {
  // Define reducer
  const initialState = { data: DUMMY_DATA, filter: "" };
  const reducer = (state, action) => {
    return { filter: action.filter, data: action.data };
  };
  const [{ filter, data }, dispatch] = useReducer(reducer, initialState);

  const handleSearchTextChange = (event) => {
    dispatch({
      filter: event.target.value,
      data: DUMMY_DATA.filter((text) => text.startsWith(event.target.value)),
    });
  };

  return (
    <Container className="d-flex flex-column justify-content-center w-25 mt-5">
      <SearchBar
        searchText={filter}
        handleSearchTextChange={handleSearchTextChange}
      />
      <List data={data} />
    </Container>
  );
}
