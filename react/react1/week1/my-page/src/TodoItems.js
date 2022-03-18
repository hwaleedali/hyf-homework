import React from "react";
function TodoItem(props) {
  return (
    <li>
      <h3>
        {props.description}: {props.deadline}
      </h3>
    </li>
  );
}
export default TodoItem;
