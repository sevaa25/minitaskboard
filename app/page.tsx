import TaskManager from "./_components/TaskManager";
import TaskCreationForm from "./_components/TaskCreationForm";
import { TaskProvider } from "@/context/TaskContext";

export default function Home() {
  return (
    <TaskProvider>
      <h1>My Tasks for today: </h1>
      <TaskManager/>
      <TaskCreationForm/>
    </TaskProvider>
  );
}
