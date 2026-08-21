import TaskManager from "./_components/TaskManager";
import TaskCreationForm from "./_components/TaskCreationForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-background">
      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>My tasks for today</CardTitle>
        </CardHeader>

        <CardContent>
          <TaskManager />
        </CardContent>

        <CardFooter>
          <TaskCreationForm />
        </CardFooter>
      </Card>
    </main>
  );
}