import { initialTasks } from '@/app/data/tasks';
import Link from 'next/link';
import { TaskProps } from '@/app/_components/Task';

interface PageProps {
    params: {
        id: string
    }
}

export default function PageDetails({params}: PageProps){
    const taskId = Number(params.id);
    const task: TaskProps | undefined = initialTasks.find((t) => t.id === taskId);

    if(!task){
        return(
            <>
                <h3>Error</h3>
                <p>Nie ma zadania o takim ID</p>
            </>
        )
    }
    return(
        <>
            <h1>Title: {task.title}</h1>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <Link href="/">Home Page</Link>
        </>
    )
}