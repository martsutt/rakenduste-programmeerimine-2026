import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load tasks");
        return res.json();
      })
      .then(setTasks)
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/tasks">Tasks</Link>
      </nav>

      {error && <p>Error: {error}</p>}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TaskListPage tasks={tasks} />} />
        <Route
          path="/tasks/:taskId"
          element={<TaskDetailsPage tasks={tasks} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
