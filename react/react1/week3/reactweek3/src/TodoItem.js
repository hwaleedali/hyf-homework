import "./App.css";
import { useState } from "react";
import FancyBorder from "./FancyBorder";
function TodoItem({ id, description, deadline, deleteTodo, editTodo }) {
  const [checked, setChecked] = useState("unchecked");
  const [editstate, setEditstate] = useState(false);
  const [updatestate, setUpdatestate] = useState("");

  const strikeThrough = () => {
    setChecked((box) => {
      if (box === "unchecked") {
        return "checked";
      } else {
        return "unchecked";
      }
    });
  };
  const toCallDelete = () => {
    deleteTodo(id);
  };
  const toCallEdit = () => {
    setEditstate(true);
    setUpdatestate(description);
  };
  function updateDesc(e) {
    const value = e.target.value;
    setUpdatestate(value);
  }
  function infoUpdation() {
    setEditstate(false);
    editTodo(id, updatestate);
  }
  return (
    <div className="borderDesign">
      <FancyBorder>
        <label htmlFor="strike" className={checked}>
          {editstate ? (
            <input type="text" value={updatestate} onChange={updateDesc} />
          ) : (
            description
          )}{" "}
          {deadline}
        </label>
        <input id="strike" type="checkbox" onChange={strikeThrough} />
        <button onClick={toCallDelete}> Delete </button>
        {editstate ? (
          <button onClick={infoUpdation}> Update </button>
        ) : (
          <button onClick={toCallEdit}> Edit </button>
        )}
      </FancyBorder>
    </div>
  );
}
export default TodoItem;
