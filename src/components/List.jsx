import React from "react";

function List({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );
}

export default List;
