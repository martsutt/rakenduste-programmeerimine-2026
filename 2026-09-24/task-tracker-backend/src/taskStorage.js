import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

export async function loadTasks(filePath) {
    try {
        const text = await readFile(filePath, "utf8");

        let data;

        try {
            data = JSON.parse(text);
        } catch (error) {
            throw new Error("Task file contains invalid JSON");
        }

        if (!Array.isArray(data)) {
            throw new Error("Task file must contain an array");
        }

        return data;
    } catch (error) {
        if (error.code === "ENOENT") {
            return [];
        }

        throw error;
    }
}

export async function saveTasks(filePath, tasks) {
    await mkdir(dirname(filePath), { recursive: true });

    await writeFile(
        filePath,
        JSON.stringify(tasks, null, 2),
        "utf8"
    );
}