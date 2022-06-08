import React from "react";
import { ListGroup } from "react-bootstrap";

export default function List({ data }) {
  return (
    <ListGroup>
      {data.map((text, index) => (
        <ListGroup.Item key={index}>{text}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
