import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

export function TodoList() {
  const [useTodo, setUseTodo] = useState([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const Api =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  useEffect(() => {
    if (setUseTodo) {
      fetch(Api)
        .then((res) => res.json())
        .then((data) => {
          setUseTodo(data);
        });
    }
  }, [setUseTodo]);

  // for add State
  function addTodo() {
    // let addID;
    // if (useTodo.length === 0) {
    //   addID = 1;
    // } else {
    //   addID = useTodo[useTodo.length - 1].id + 1;
    // }
    const id = useTodo.length === 0 ? 1 : useTodo[useTodo.length - 1].id + 1;
    const newTodo = {
      id: id,
      description: description,
      deadline: deadline,
    };
    console.log(newTodo);
    setUseTodo((prev) => [...prev, newTodo]);
  }

  const todoValues = useTodo.map((item) => {
    return (
      <TodoItem
        description={item.description}
        deadline={item.deadline}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        key={item.id}
        id={item.id}
      />
    );
  });
  // for Delete State

  function deleteTodo(id) {
    setUseTodo((prevTodos) => {
      let dataItems = prevTodos.filter((item) => item.id != id);
      return dataItems;
    });
  }
  // for Edit and Update State
  function editTodo(id, description) {
    console.log(id, description);
    const editedData = [...useTodo].map((edit) => {
      if (edit.id === id) {
        edit.description = description;
      }
      return edit;
    });
    setUseTodo(editedData);
  }
  return (
    <div>
      <h2> Todo App</h2>
      Description:
      <input
        className="innerdesign"
        type="text"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <br />
      Deadline:
      <input
        className="innerdesign"
        type="date"
        onChange={(e) => setDeadline(e.target.value)}
      ></input>
      <br />
      {todoValues.length === 0 && <p>No Items,Try Add</p>}
      <button className="innerdesign" onClick={addTodo}>
        {" "}
        Add todo{" "}
      </button>
      {todoValues}
    </div>
  );
}
