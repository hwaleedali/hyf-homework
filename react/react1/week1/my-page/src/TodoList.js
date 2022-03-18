import React from "react";
import TodoItems from "./TodoItems";

export function TodoList(props) {
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
