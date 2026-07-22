export type TaskStatus = "todo" | "in-progress" | "done"

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export default function Task({id, title, description, status} : TaskProps){
    return (
        <li>
            <h3>Title: {title}</h3>
            <p>Description: {description}</p>
            <p>Status: {status}</p>
        </li>
    )
}