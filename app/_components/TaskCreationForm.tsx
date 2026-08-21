"use client";

import { useState, useContext } from "react";
import { TaskStatus } from "./Task";
import { TaskContext } from "@/context/TaskContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function TaskCreationForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");
  const [error, setError] = useState("");
  const context = useContext(TaskContext);

  if (!context) {
    return (
      <div className="p-4 text-center text-sm text-destructive bg-destructive/10 rounded-lg">
        TaskContext is missing
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.length <= 4 || description.length <= 0) {
      setError("Please enter title and description (> 4 characters).");
      return;
    }

    context.addTask({
      id: Date.now(),
      title,
      description,
      status: status,
    });

    setTitle("");
    setDescription("");
    setStatus("todo");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-semibold text-card-foreground">
          Add a New Task
        </h3>
      </div>

      {error && (
        <div className="p-2.5 rounded-lg text-xs font-medium bg-destructive/15 text-destructive border border-destructive/30">
          {error}
        </div>
      )}

      <div className="flex flex-col gap-3">
        <Input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-background/80 border-border/50 text-foreground placeholder:text-foreground/50 focus-visible:ring-1 focus-visible:ring-foreground/30"
        />

        <Textarea
          placeholder="Task description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="bg-background/80 border-border/50 text-foreground placeholder:text-foreground/50 focus-visible:ring-1 focus-visible:ring-foreground/30 resize-none"
        />

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            className="w-full sm:w-48 h-10 px-3 rounded-md text-sm bg-background/80 border border-border/50 text-foreground focus:outline-none focus:ring-1 focus:ring-foreground/30 cursor-pointer"
            data-testid="task-creation-options"
          >
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <Button
            type="submit"
            className="w-full sm:w-auto px-6 font-medium shadow-sm transition-all active:scale-95"
          >
            Add Task
          </Button>
        </div>
      </div>
    </form>
  );
}