import { useState } from "react";
import "./style.css";

function Form({ addTodo }) {
  const [input, setInput] = useState("");
  return (
    <div className="form">
      <input
        placeholder="adicione uma tarefa"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <div className="wrap">
        <button className="button" onClick={() => addTodo(input)}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Form;
