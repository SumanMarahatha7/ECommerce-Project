import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}&page=1`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };
  return (
    <form class="form-inline mx-auto" onSubmit={submitHandler}>
      <input
        class="form-control mr-sm-2"
        style={{width:"520px"}}
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        type="search"
        placeholder="Search"
        aria-label="Search"
      />

      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBox;
