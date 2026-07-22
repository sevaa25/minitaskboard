import Task from './Task';
import { TaskProps } from './Task';

interface TaskListProps {
    tasks: TaskProps[]; 
}

export default function TaskList({tasks}: TaskListProps){
    if (tasks.length <= 0){
        return <p>No tasks on the board</p>
    }
    return (
        <ul>
            {tasks.map((task) => 
                <Task key={task.id} id={task.id}
                    title={task.title} description={task.description}
                    status={task.status}/>
            )}
        </ul>
    )
}