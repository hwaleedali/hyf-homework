import React from "react";

export function TodoItem({ text, checked, id, deleteTodo, strikeTodo }) {
  return (
    <li className="lineThrough">
      <span className={checked ? "checked" : "unchecked"}>{text}</span>
      <input
        type="checkbox"
        // checked={() => console.log("gg")}
        value={checked}
        onChange={() => strikeTodo(id)}
        // checked={todos.done}
      ></input>

      <button onClick={() => deleteTodo(id)}> Delete </button>
    </li>
  );
}
