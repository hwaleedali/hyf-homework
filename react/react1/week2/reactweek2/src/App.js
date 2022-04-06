import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";
import { TodoList } from "./TodoList";
function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
