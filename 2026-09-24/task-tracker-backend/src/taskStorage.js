import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

export async function loadTasks(filePath) {
    const text = await readFile(filePath, "utf8");

    return JSON.parse(text);
}

export async function saveTasks(filePath, tasks) {
    await mkdir(dirname(filePath), { recursive: true });

    await writeFile(
        filePath,
        JSON.stringify(tasks, null, 2),
        "utf8",
    );
}