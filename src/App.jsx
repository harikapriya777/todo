import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Styled Todo App</h1>

        <div className="form-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty">No tasks added yet</p>
          ) : (
            todos.map((todo, index) => (
              <div className="todo-item" key={index}>
                <span
                  className={todo.completed ? "completed" : ""}
                  onClick={() => toggleComplete(index)}
                >
                  {todo.text}
                </span>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;