import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

const todoData = [
  { description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
];

function App() {
  return (
    <div className="App">
      <h3>Todo List</h3>
      <TodoList TodoData={todoData}></TodoList>;
    </div>
  );
}

export default App;
