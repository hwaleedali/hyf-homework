import React from "react";
function TodoItem({ description, deadline }) {
  return (
    <li>
      <h3>
        {description}: {deadline}
      </h3>
    </li>
  );
}
export default TodoItem;
