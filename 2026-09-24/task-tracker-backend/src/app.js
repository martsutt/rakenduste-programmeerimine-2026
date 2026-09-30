import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const tasks = [
    { id: 1, title: "Learn JSX", completed: true },
    { id: 2, title: "Practise React state", completed: false },
    { id: 3, title: "Build a Node.js API", completed: false },
];

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/api/tasks", (req, res) => {
    const { completed } = req.query;

    if (completed !== undefined && completed !== "true" && completed !== "false") {
        return res.status(400).json({
            error: "completed must be true or false",
        });
    }

    if (completed === "true") {
        return res.json(tasks.filter((task) => task.completed === true));
    }

    if (completed === "false") {
        return res.json(tasks.filter((task) => task.completed === false));
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

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error("Serveri viga:", err.message);
    console.log("Aadressil:", req.url);
    res.status(500).json({ error: "Internal server error" });
});

export { app };