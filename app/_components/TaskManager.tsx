"use client"

import SearchBar from './SearchBar';
import { TaskProps } from './Task';
import { useState, useContext } from 'react';
import TaskList from './TaskList';
import { TaskContext } from '@/context/TaskContext';


export default function TaskManager(){
    const context = useContext(TaskContext);
    const [searchFilter, setSearchFilter] = useState<string>('all');
    if(!context){
        return <p>TaskContext is missing</p>;
    }
    
    console.log("Current filter:", searchFilter);
    const filteredTasks: TaskProps[] = context.tasks.filter((task) => {
        if (searchFilter === "all") return true;
        return task.status === searchFilter;
    });
    console.log("Filtered results:", filteredTasks);
    return (
        <>
            <SearchBar val={searchFilter} handleChange={setSearchFilter}/>
            <TaskList tasks={filteredTasks}/>
        </>
    )
}