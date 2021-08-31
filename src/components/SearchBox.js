import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="search" inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products by title here ....."
        className="mr-sm-2 ml-sm-5"
        style={{ width: "80%" }}
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        <FaSearch />
      </Button>
    </Form>
  );
};

export default SearchBox;
