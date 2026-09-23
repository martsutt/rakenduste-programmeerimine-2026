import { Link } from "react-router-dom";

function TaskListPage({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link to={`/tasks/${task.id}`}>{task.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TaskListPage;
