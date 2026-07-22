import Task from './Task';
export type TaskStatus = "todo" | "in-progress" | "done"


export default function TaskList(){
    return (
        <>
            <ul>
                <Task id={0} title="Get Up" description="Make sure not to turn the alarm off" status ="done"/>
                <Task id={1} title="Take A Shower" description="Make sure the water is warm" status ="in-progress"/>
                <Task id={2} title="Make a Brakfast" description="Break a few eggs to make an omlette" status ="todo"/>
                <Task id={3} title="Complete a Coding Task" description="Finish before the battery is finished" status ="todo"/>
                <Task id={4} title="Clean the Room" description="Time to say goodbye to dust and dirt" status ="todo"/>
                <Task id={5} title="Go outside" description="Touch some grass" status ="todo"/>
            </ul>
        </>
    )
}