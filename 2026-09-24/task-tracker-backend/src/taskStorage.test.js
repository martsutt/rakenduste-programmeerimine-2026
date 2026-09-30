import { afterEach, describe, expect, it } from "vitest";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { loadTasks, saveTasks } from "./taskStorage.js";

let tempDirectory;

afterEach(async () => {
    if (tempDirectory) {
        await rm(tempDirectory, {
            recursive: true,
            force: true,
        });

        tempDirectory = null;
    }
});

describe("task file storage", () => {
    it("saves and loads tasks from a temporary file", async () => {
        tempDirectory = await mkdtemp(join(tmpdir(), "task-tracker-"));

        const filePath = join(tempDirectory, "tasks.json");

        const tasks = [
            {
                id: 1,
                title: "First task",
                completed: false,
            },
            {
                id: 2,
                title: "Second task",
                completed: true,
            },
        ];

        await saveTasks(filePath, tasks);

        const loadedTasks = await loadTasks(filePath);

        expect(loadedTasks).toEqual(tasks);
    });
});