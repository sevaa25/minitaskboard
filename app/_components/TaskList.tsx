import Task from "./Task";
import { TaskProps } from "./Task";

interface TaskListProps {
  tasks: TaskProps[];
}

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length <= 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center rounded-xl border border-dashed border-border/40">
        <p className="text-sm font-medium text-card-foreground/70">
          No tasks found
        </p>
        <p className="text-xs text-card-foreground/50 mt-1">
          Create a new task below or adjust your status filter.
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4 list-none p-0 m-0">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
        />
      ))}
    </ul>
  );
}