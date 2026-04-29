import { TaskList } from "@/components/tasks/TaskList";

export default function TasksPage() {
  return (
    <div className="w-full flex flex-col gap-6 py-8 pt-8 px-2">
      <h1 className="text-3xl font-bold">Tasks</h1>

      <div className="w-full">
        <TaskList />
      </div>
    </div>
  );
}