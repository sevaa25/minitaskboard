"use client";

import { useState } from "react";
import { useTasks } from "@/context/TaskContext";
import { TaskProps, TaskStatus } from "./Task";

export default function TaskCreationForm() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (title.length <= 4  || description.length <= 0){
        setError("Please enter title/description, so it's > 4 chars");
        return;
    } 

    const newTask = {
      id: Date.now(), 
      title,
      description,
      status: status
    };

    addTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Error: {error}</p>
      <h3>Add a New Task</h3>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <select onChange={(e) => setStatus(e.target.value as TaskStatus)} >
            <option value="todo">TODO</option>
            <option value="in-progress">In-Progress</option>
            <option value="done">Done</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}