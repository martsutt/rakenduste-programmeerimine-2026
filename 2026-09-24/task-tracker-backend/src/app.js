import express from "express";
import cors from "cors";

const defaultTasks = [
    { id: 1, title: "Learn JSX", completed: true },
    { id: 2, title: "Practise React state", completed: false },
    { id: 3, title: "Build a Node.js API", completed: false },
];

export function createApp(
    initialTasks = defaultTasks,
    saveTasksToFile = null,
) {
    const app = express();

    const tasks = initialTasks.map((task) => ({ ...task }));

    app.use(cors());
    app.use(express.json());

    app.use((req, res, next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    });

    app.get("/api/tasks", (req, res) => {
        const { completed } = req.query;

        if (
            completed !== undefined &&
            completed !== "true" &&
            completed !== "false"
        ) {
            return res.status(400).json({
                error: "completed must be true or false",
            });
        }

        if (completed === "true") {
            return res.json(
                tasks.filter((task) => task.completed === true),
            );
        }

        if (completed === "false") {
            return res.json(
                tasks.filter((task) => task.completed === false),
            );
        }

        res.json(tasks);
    });

    app.get("/api/tasks/:id", (req, res) => {
        const id = Number(req.params.id);
        const task = tasks.find((task) => task.id === id);

        if (!task) {
            return res.status(404).json({
                error: "Task not found",
            });
        }

        res.json(task);
    });

    app.get("/api/crash", (req, res) => {
        throw new Error("Something broke on purpose");
    });

    app.get("/api/health", (req, res) => {
        res.status(200).json({ status: "ok" });
    });

    app.post("/api/tasks", async (req, res, next) => {
        const { title } = req.body;

        if (typeof title !== "string") {
            return res.status(400).json({
                error: "Title is required",
            });
        }

        const trimmedTitle = title.trim();

        if (trimmedTitle === "") {
            return res.status(400).json({
                error: "Title is required",
            });
        }

        const newId = tasks.length
            ? Math.max(...tasks.map((task) => task.id)) + 1
            : 1;

        const newTask = {
            id: newId,
            title: trimmedTitle,
            completed: false,
        };

        tasks.push(newTask);

        try {
            if (saveTasksToFile) {
                await saveTasksToFile(tasks);
            }

            res.status(201).json(newTask);
        } catch (error) {
            next(error);
        }
    });

    app.patch("/api/tasks/:id", async (req, res, next) => {
        const id = Number(req.params.id);
        const task = tasks.find((task) => task.id === id);

        if (!task) {
            return res.status(404).json({
                error: "Task not found",
            });
        }

        const { title, completed } = req.body;
        const fields = Object.keys(req.body);

        if (
            fields.length === 0 ||
            fields.some(
                (field) => field !== "title" && field !== "completed",
            )
        ) {
            return res.status(400).json({
                error: "Invalid update",
            });
        }

        if (title !== undefined) {
            if (typeof title !== "string" || title.trim() === "") {
                return res.status(400).json({
                    error: "Title must be a non-empty string",
                });
            }

            task.title = title.trim();
        }

        if (completed !== undefined) {
            if (typeof completed !== "boolean") {
                return res.status(400).json({
                    error: "Completed must be a boolean",
                });
            }

            task.completed = completed;
        }

        try {
            if (saveTasksToFile) {
                await saveTasksToFile(tasks);
            }

            res.status(200).json(task);
        } catch (error) {
            next(error);
        }
    });

    app.delete("/api/tasks/:id", async (req, res, next) => {
        const id = Number(req.params.id);
        const index = tasks.findIndex((task) => task.id === id);

        if (index === -1) {
            return res.status(404).json({
                error: "Task not found",
            });
        }

        tasks.splice(index, 1);

        try {
            if (saveTasksToFile) {
                await saveTasksToFile(tasks);
            }

            res.status(204).send();
        } catch (error) {
            next(error);
        }
    });

    app.use((req, res) => {
        res.status(404).json({ error: "Route not found" });
    });

    app.use((err, req, res, next) => {
        console.error("Serveri viga:", err.message);
        console.log("Aadressil:", req.url);
        res.status(500).json({ error: "Internal server error" });
    });

    return app;
}

const app = createApp();

export { app };