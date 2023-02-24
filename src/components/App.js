import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Loader from "./Loader";
import Todo from "./Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);
  const [showIncompleted, setShowIncompleted] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        setTodos(result.slice(0, 20));
        setLoading(false);
      });
  }, []);

  const handleCompletedCheckbox = () => {
    setShowCompleted(!showCompleted);
  };

  const handleIncompletedCheckbox = () => {
    setShowIncompleted(!showIncompleted);
  };
  const filteredTodos = todos.filter((todo) => {
    if (showCompleted && showIncompleted) {
      return true;
    } else if (showCompleted && !showIncompleted) {
      return todo.completed;
    } else if (!showCompleted && showIncompleted) {
      return !todo.completed;
    } else {
      return false;
    }
  });

  return (
    <div className="App">
      <Loader loading={loading} />
      <div className="todo-container">
        <ol id="todos">
          {filteredTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ol>
        <div id="filter-holder">
          <label>
            <input
              type="checkbox"
              id="completed-chekbox"
              checked={showCompleted}
              onChange={handleCompletedCheckbox}
            />
            Completed
          </label>
          <label>
            <input
              type="checkbox"
              id="incompleted-checkbox"
              checked={showIncompleted}
              onChange={handleIncompletedCheckbox}
            />
            Incompleted
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
