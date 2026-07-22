import Task from './Task';
import { TaskStatus } from './Task';

const tasks = [
    {id: 0, title: "Get Up", description: "Don't turn the alarm off", status: "todo" as TaskStatus},
    {id: 1, title: "Take A Shower", description: "Make sure there is water", status: "in-progres" as TaskStatus},
    {id: 2, title: "Make Breakfast", description: "Break a few eggs to make an omlette", status: "todo" as TaskStatus},
    {id: 3, title: "Clean the Room", description: "No more dust and dirt", status: "todo" as TaskStatus},
    {id: 4, title: "Go outside", description: "Touch some grass", status: "todo" as TaskStatus},
    {id: 5, title: "Read a Book", description: "Chapter 1..", status: "in-progress" as TaskStatus},
]

export default function TaskList(){
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