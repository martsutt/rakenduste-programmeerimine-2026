import { beforeEach, describe, expect, it } from "vitest";
import request from "supertest";
import { createApp } from "./app.js";

let app;

beforeEach(() => {
    app = createApp();
});

describe("Task API", () => {
    it("GET /api/tasks returns tasks", async () => {
        const response = await request(app).get("/api/tasks");

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(3);
    });

    it("POST /api/tasks creates a valid task", async () => {
        const response = await request(app)
            .post("/api/tasks")
            .send({ title: "Learn Express" });

        expect(response.status).toBe(201);
        expect(response.body.title).toBe("Learn Express");
        expect(response.body.completed).toBe(false);
        expect(response.body.id).toBe(4);
    });

    it("POST /api/tasks rejects an empty title", async () => {
        const response = await request(app)
            .post("/api/tasks")
            .send({ title: "   " });

        expect(response.status).toBe(400);
    });

    it("unknown task returns 404", async () => {
        const response = await request(app).get("/api/tasks/99");

        expect(response.status).toBe(404);
    });

    it("DELETE removes a task", async () => {
        const deleteResponse = await request(app)
            .delete("/api/tasks/2");

        expect(deleteResponse.status).toBe(204);

        const getResponse = await request(app)
            .get("/api/tasks/2");

        expect(getResponse.status).toBe(404);
    });
});