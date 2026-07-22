"use client";

import { useState, useContext } from "react";
import { TaskProps, TaskStatus } from "./Task";
import { TaskContext } from "@/context/TaskContext";

export default function TaskCreationForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("todo");
  const [error, setError] = useState("");
  const context = useContext(TaskContext);

  if(!context){
        return <p>TaskContext is missing</p>;
    }

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (title.length <= 4  || description.length <= 0){
        setError("Please enter title/description, so it's > 4 chars");
        return;
    } 

    context.addTask({
      id: Date.now(), 
      title,
      description,
      status: status
    });

    setTitle("");
    setDescription("");
    setStatus("todo");
    setError("");
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
        <textarea
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