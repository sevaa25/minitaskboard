interface SearchBarProps {
    val: string;
    handleChange: (value: string) => void;
}

export default function SearchBar({val, handleChange}: SearchBarProps){
    return(
        <>
            <select value={val} onChange={(e) => handleChange(e.target.value)}>
                <option value="all">All</option>
                <option value="todo">TODO</option>
                <option value="in-progress">In-Progress</option>
                <option value="done">Done</option>
            </select>
        </>
    )
}