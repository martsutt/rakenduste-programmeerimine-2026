export function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.completed ? "Completed" : "Not completed"}</p>
    </div>
  );
}
