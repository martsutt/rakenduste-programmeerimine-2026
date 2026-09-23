import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import HomePage from "./pages/HomePage";
import TaskListPage from "./pages/TaskListPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import Header from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import CompletionToggle from "./components/CompletionToggle";
import { getTasks } from "./services/taskApi";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    getTasks()
      .then((data) => {
        if (active) setTasks(data);
      })
      .catch((err) => {
        if (active) setError(err.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  function handleAddTask(title) {
    setTasks((prev) => [
      ...prev,
      {
        id: prev.length ? Math.max(...prev.map((t) => t.id)) + 1 : 1,
        title,
        completed: false,
      },
    ]);
  }

  function handleToggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

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

      {loading && <p>Loading tasks...</p>}
      {error && <p>Error: {error}</p>}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/tasks"
          element={
            <TaskListPage
              tasks={tasks}
              onAdd={handleAddTask}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          }
        />
        <Route
          path="/tasks/:taskId"
          element={
            <TaskDetailsPage tasks={tasks} onToggle={handleToggleTask} />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
