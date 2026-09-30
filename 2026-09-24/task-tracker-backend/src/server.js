import { createApp } from "./app.js";
import { loadTasks, saveTasks } from "./taskStorage.js";
import { PORT, TASKS_FILE } from "./config.js";

const tasks = await loadTasks(TASKS_FILE);

const app = createApp(
    tasks,
    (updatedTasks) => saveTasks(TASKS_FILE, updatedTasks),
);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});