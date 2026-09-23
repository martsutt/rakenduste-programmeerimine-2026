import { useState } from "react";

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = title.trim();
    if (trimmed === "") return;
    onAddTask(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-title">New task</label>
      <input
        id="task-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
