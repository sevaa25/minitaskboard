"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { TaskProps } from "@/app/_components/Task"
import { initialTasks } from "@/app/data/tasks";

interface TaskContextType {
  tasks: TaskProps[];
  addTask: (task: TaskProps) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const addTask = (newTask: TaskProps) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};