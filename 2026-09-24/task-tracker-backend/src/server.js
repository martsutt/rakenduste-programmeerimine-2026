import { createApp } from "./app.js";
import { loadTasks, saveTasks } from "./taskStorage.js";

const tasks = await loadTasks("./data/tasks.json");

const app = createApp(
    tasks,
    (updatedTasks) => saveTasks("./data/tasks.json", updatedTasks),
);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});