import React from "react";
import TodoItems from "./TodoItems";

function TodoList(props) {
  return (
    <ul>
      {props.TodoData.map((user) => {
        return (
          <TodoItems description={user.description} deadline={user.deadline} />
        );
      })}
    </ul>
  );
}
export default TodoList;
