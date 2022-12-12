import React, { useState } from "react";
import "./Percentagecalc.scss";

const Percentagecalc = () => {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState([]);

  //   console.log(todos, "todos array ====>");

  const addTodo = (e) => {
    setTodos([
      ...todos,
      {
        id: new Date(),
        title: newTask,
      },
    ]);
    setNewTask("");
  };

  console.log(todos, "----");

  const handleDelete = (t) => {
    const filtered = todos.filter((item) => item.id !== t.id);
    setTodos(filtered);
  };

  return (
    <div className="main-container">
      <div className="todo-wrapper">
        <div className="input-wrapper">
          <input
            type={"text"}
            value={newTask}
            placeholder="new task"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        {todos.map((task) => {
          return (
            <div className="single-todo-wrapper">
              <h5>{task.title}</h5>
              <div className="button-wrapper">
                <button onClick={() => handleDelete(task)}>Delete</button>
                <button>edit</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Percentagecalc;
