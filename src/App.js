import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/ToDoList";
function App() {
  const [list, setList] = useState([]);

  const addTodo = (newTodo) => {
    setList([...list, newTodo]);
  };
  const handleTodo = (item) => {
    const filter = list.filter((el) => el !== item);
    setList(filter);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList list={list} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
