import React from "react";

function Todo({ todo }) {
  return (
    <li
      className={`todo ${todo.completed ? "completed" : "incomplete"}`}
      id={`todo-${todo.id}`}
    >
      <div className="todo-title">{todo.title}</div>
      <div className="todo-status">
        {todo.completed ? "Complete" : "Incomplete"}
      </div>
    </li>
  );
}

export default Todo;
