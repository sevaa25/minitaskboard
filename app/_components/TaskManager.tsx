"use client";

import SearchBar from "./SearchBar";
import { TaskProps } from "./Task";
import { useState, useContext } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "@/context/TaskContext";

export default function TaskManager() {
  const context = useContext(TaskContext);
  const [searchFilter, setSearchFilter] = useState<string>("all");

  if (!context) {
    return (
      <div className="p-4 text-center text-sm text-destructive bg-destructive/10 rounded-lg">
        TaskContext is missing
      </div>
    );
  }

  const filteredTasks: TaskProps[] = context.tasks.filter((task) => {
    if (searchFilter === "all") return true;
    return task.status === searchFilter;
  });

  return (
    <div className="flex flex-col gap-4">
      <SearchBar val={searchFilter} handleChange={setSearchFilter} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}