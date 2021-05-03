import './App.css';
import React, { useState } from "react"

function Todo({ todo, index, completeTodo }) {
  return (
    <div className="todoItem">
      <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </div>
      <div>
        <button onClick={() => completeTodo(index)}>&#10004;</button>
      </div>
    </div>
  );
};
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>TodoApp</h1>
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        <div className="todoList">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
