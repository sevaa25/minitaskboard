"use client";


import Link from "next/link";
import { use, useContext } from "react";
import { TaskProps } from "@/app/_components/Task";
import { TaskContext } from "@/context/TaskContext";

interface PageProps {
    params: Promise<{id: string}>
}

export default function PageDetails({params}: PageProps) {
    const { id } = use(params);
    const context = useContext(TaskContext);
    if(!context){
        return <p>TaskContext is missing</p>;
    }

    const task: TaskProps | undefined = context.tasks.find((t) => String(t.id) === id);

    if (!task) {
        return (
            <>
                <h3>Error</h3>
                <p>Nie ma zadania o takim ID</p>
                <br />
                <Link href="/">Home Page</Link>
            </>
        );
    }

    return (
        <>
            <h1>Title: {task.title}</h1>
            <p>Description: {task.description}</p>
            <p>Status: {task.status}</p>
            <br />
            <Link href="/">Home Page</Link>
        </>
    );
}