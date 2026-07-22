"use client"

import SearchBar from './SearchBar';
import { TaskProps } from './Task';
import { useState } from 'react';
import TaskList from './TaskList';
import { useTasks } from '@/context/TaskContext';

export default function TaskManager(){
    const { tasks } = useTasks();
    const [searchFilter, setSearchFilter] = useState<string>('all');
    console.log("Current filter:", searchFilter);
    const filteredTasks: TaskProps[] = tasks.filter((task) => {
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