export function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.completed ? "Completed" : "Not completed"}</p>
      {onToggle && <button onClick={() => onToggle(task.id)}>Toggle</button>}
      {onDelete && <button onClick={() => onDelete(task.id)}>Delete</button>}
    </div>
  );
}
