import "dotenv/config";

export const PORT = Number(process.env.PORT || 3000);

export const TASKS_FILE =
    process.env.TASKS_FILE || "./data/tasks.json";