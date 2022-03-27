import React, { useState } from "react";
import "./App.css";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    checked: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    checked: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    checked: false,
  },
];

const newTodos = [
  {
    description: "got to bed",
  },
  {
    description: "dream well",
  },
  {
    description: "explain the dream in the morning",
  },
];
export function TodoList() {
  const [useTodo, setUseTodo] = useState(todos);
  console.log(useTodo);

  function addRandomTodo() {
    let randomID;
    const randomIndex = Math.floor(Math.random() * newTodos.length);
    if (useTodo.length === 0) {
      randomID = 1;
    } else {
      randomID = useTodo[useTodo.length - 1].id + 1;
    }
    const randomTodo = { id: randomID, ...newTodos[randomIndex] };

    console.log(randomTodo);

    const RandomTodoAddition = setUseTodo((todosList) => [
      ...todosList,
      randomTodo,
    ]);
    return RandomTodoAddition;
  }
  const TodoItems = useTodo.map((todo) => (
    <TodoItem
      text={todo.description}
      checked={todo.checked}
      id={todo.id}
      key={todo.id}
    ></TodoItem>
  ));

  function TodoItem({ text, checked, id }) {
    return (
      <li className="lineThrough">
        <span className={checked ? "checked" : "unchecked"}>
          {text}
          {todos.description}
        </span>
        <input
          type="checkbox"
          // checked={() => console.log("gg")}
          value={checked}
          onChange={() => StrikeTodo(id)}
          // checked={todos.done}
        ></input>

        <button onClick={() => deleteTodo(id)}> Delete </button>
      </li>
    );
  }
  const StrikeTodo = (id) => {
    var strikeList = [...useTodo];
    strikeList.forEach((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
    });
    setUseTodo(strikeList);
  };
  function deleteTodo(id) {
    return setUseTodo((prevTodos) => {
      let dataItems = prevTodos.filter((item) => item.id != id);
      return dataItems;
    });
  }

  return (
    <div>
      <h2> Todo List</h2>

      {TodoItems.length === 0 && "No Items, Add Again"}
      {TodoItems}
      <button onClick={addRandomTodo}> Add todo </button>
    </div>
  );
}
