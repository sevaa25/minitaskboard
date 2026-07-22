import { TaskStatus } from "./TaskList"

interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export default function Task({id, title, description, status} : TaskProps){
    return (
        <>
            
        </>
    )
}