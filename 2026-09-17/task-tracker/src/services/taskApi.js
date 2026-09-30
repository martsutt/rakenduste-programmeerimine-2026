const API_URL = import.meta.env.VITE_API_URL;

export function getTasks() {
  return fetch(`${API_URL}/api/tasks`).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to load tasks");
    }

    return res.json();
  });
}

export function createTask(title) {
  return fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to create task");
    }

    return res.json();
  });
}