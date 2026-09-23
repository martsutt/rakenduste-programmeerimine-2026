import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { TaskCard } from "./TaskCard.jsx";

const task = { id: 1, title: "Learn JSX", completed: false };

describe("TaskCard", () => {
  it("kuvab taski pealkirja", () => {
    render(<TaskCard task={task} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText("Learn JSX")).toBeInTheDocument();
  });

  it("kutsub onToggle õige ID-ga, kui Toggle nuppu vajutada", async () => {
    const onToggle = vi.fn();
    render(<TaskCard task={task} onToggle={onToggle} onDelete={() => {}} />);
    await userEvent.click(screen.getByRole("button", { name: "Toggle" }));
    expect(onToggle).toHaveBeenCalledWith(task.id);
  });
});
