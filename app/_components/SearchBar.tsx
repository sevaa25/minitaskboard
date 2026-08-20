interface SearchBarProps {
  val: string;
  handleChange: (value: string) => void;
}

export default function SearchBar({ val, handleChange }: SearchBarProps) {
  return (
    <div className="flex items-center justify-between gap-5 pb-3 border-b border-border/20">
      <label
        htmlFor="status-filter"
        className="text-xs font-semibold uppercase tracking-wider text-card-foreground/70"
      >
        Filter by status
      </label>

      <select
        id="status-filter"
        value={val}
        onChange={(e) => handleChange(e.target.value)}
        className="h-9 px-3 rounded-lg text-xs font-medium bg-background/80 border border-border/40 text-card-foreground shadow-xs transition-colors hover:border-border/70 cursor-pointer"
      >
        <option value="all">All Tasks</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}