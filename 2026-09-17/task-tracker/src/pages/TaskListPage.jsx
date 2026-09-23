import { useState } from "react";
import { Link } from "react-router-dom";
import { TaskForm } from "../components/TaskForm";
import { TaskCard } from "../components/TaskCard";
import { PageSection } from "../components/PageSection.jsx";

function TaskListPage({ tasks, onAdd, onToggle, onDelete }) {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <PageSection title="My tasks">
      <div>
        <TaskForm onAddTask={onAdd} />

        <div>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={() => setFilter("incomplete")}>Incomplete</button>
        </div>

        {filteredTasks.length === 0 ? (
          <p>No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <div key={task.id}>
              <TaskCard task={task} onToggle={onToggle} onDelete={onDelete} />
              <Link to={`/tasks/${task.id}`}>Details</Link>
            </div>
          ))
        )}
      </div>
    </PageSection>
  );
}

export default TaskListPage;
