import SearchBar from "./_components/SearchBar";
import TaskList from "./_components/TaskList";

export default function Home() {
  return (
    <>
      <h1>My Tasks for today: </h1>
      <SearchBar/>
      <TaskList/>
    </>
  );
}
