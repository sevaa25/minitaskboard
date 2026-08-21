import Link from "next/link";

export type TaskStatus = "todo" | "in-progress" | "done";

export interface TaskProps {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export default function Task({ id, title, description, status }: TaskProps) {
  return (
    <li className="list-none" data-testid="task-card">
      <Link
        href={`/tasks/${id}`}
        className="block p-4 rounded-2xl border border-border/40 bg-background/50 hover:bg-background hover:border-foreground/20 hover:shadow-md transition-all"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-card-foreground hover:underline">
            {title}
          </h3>

          <span className="text-xs p-1.5 rounded-md border border-border/80 bg-white text-card-foreground uppercase" data-testid="task-status">
            {status.replace("-", " ")}
          </span>
        </div>

        <p className="text-xs text-card-foreground/70 mt-1 line-clamp-2">
          {description}
        </p>
      </Link>
    </li>
  );
}