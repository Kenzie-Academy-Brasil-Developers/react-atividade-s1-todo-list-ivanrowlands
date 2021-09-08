function TodoList({ list, handleTodo }) {
  return (
    <>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item}
            <button className="btn2" onClick={() => handleTodo(item)}>
              Concluir tarefa
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
