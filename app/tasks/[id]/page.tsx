"use client";

import Link from "next/link";
import { use, useContext } from "react";
import { TaskProps } from "@/app/_components/Task";
import { TaskContext } from "@/context/TaskContext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function PageDetails({ params }: PageProps) {
  const { id } = use(params);
  const context = useContext(TaskContext);

  if (!context) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center p-4">
        <p className="text-destructive font-medium">TaskContext is missing</p>
      </main>
    );
  }

  const task: TaskProps | undefined = context.tasks.find(
    (t) => String(t.id) === id
  );

  if (!task) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center p-4 bg-background">
        <Card className="max-w-md p-6 text-center space-y-4">
          <CardTitle className="text-xl font-bold text-destructive">
            Task Not Found
          </CardTitle>
          <CardDescription>Nie ma zadania o takim ID</CardDescription>

          <Link
            href="/"
            className="inline-block px-4 py-2 text-sm font-medium rounded-lg border border-border/80 bg-background/80 hover:bg-background hover:border-foreground/30 transition-all"
          >
            ← Back to Home
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-background">
      <Card className="max-w-2xl">
        <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-border/20 pb-4">
          <CardTitle className="text-xl font-bold">{task.title}</CardTitle>
          <span className="text-xs px-2.5 py-1 rounded-md border border-border/80 bg-white uppercase">
            {task.status.replace("-", " ")}
          </span>
        </CardHeader>

        <CardContent className="space-y-2 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-card-foreground/70">
            Description
          </p>
          <p className="p-3.5 rounded-lg border border-border/60 bg-background/60 text-sm leading-relaxed">
            {task.description}
          </p>
        </CardContent>

        <CardFooter className="border-t border-border/20 pt-4">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium rounded-lg border border-border/80 bg-background/80 hover:bg-background hover:border-foreground/30 transition-all"
          >
            ← Back to Home
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}