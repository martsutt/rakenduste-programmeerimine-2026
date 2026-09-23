export function getTasks() {
  return fetch(`${import.meta.env.BASE_URL}tasks.json`).then((res) => {
    if (!res.ok) throw new Error("Failed to load tasks");
    return res.json();
  });
}
