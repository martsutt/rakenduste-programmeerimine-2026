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
    res.json(tasks);
});

app.get("/api/crash", (req, res) => {
    throw new Error("Something broke on purpose");
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error("Serveri viga:", err.message);
    console.log("Aadressil:", req.url);
    res.status(500).json({ error: "Internal server error" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});