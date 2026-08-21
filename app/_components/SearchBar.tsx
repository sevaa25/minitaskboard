interface SearchBarProps {
  val: string;
  handleChange: (value: string) => void;
}

export default function SearchBar({ val, handleChange }: SearchBarProps) {
  return (
    <div className="flex items-center justify-between pb-3">
      <label
        htmlFor="status-filter"
        className="text-sm font-semibold uppercase tracking-wider text-card-foreground/70"
      >
        Filter by status
      </label>

      <select
        id="status-filter"
        value={val}
        onChange={(e) => handleChange(e.target.value)}
        className="h-10 px-3 rounded-lg text-sm bg-background border border-border/70 hover:border-border hover:bg-white shadow-sm transition-all cursor-pointer"
      >
        <option value="all">All Tasks</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}