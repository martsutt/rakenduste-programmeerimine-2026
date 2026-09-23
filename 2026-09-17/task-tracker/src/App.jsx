import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Header from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import CompletionToggle from "./components/CompletionToggle";

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
      <Header />

      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/tasks">Tasks</Link>
      </nav>

      <TaskCard task={{ id: 1, title: "Learn JSX", completed: true }} />
      <TaskCard
        task={{ id: 2, title: "Practise React state", completed: false }}
      />
      <CompletionToggle />

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
