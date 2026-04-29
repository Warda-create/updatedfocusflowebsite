"use client";

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { uid, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Task, TaskPriority, TaskStatus } from "@/types/task";
import { cn } from "@/lib/utils";

const PRIORITY_STYLES: Record<TaskPriority, string> = {
  low:    "bg-slate-700/60 text-slate-400 border-slate-700",
  medium: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  high:   "bg-red-500/10 text-red-400 border-red-500/30",
};

const STATUS_STYLES: Record<TaskStatus, string> = {
  todo:         "border-slate-700 text-slate-500",
  "in-progress": "border-violet-500/50 text-violet-400 bg-violet-500/5",
  done:          "border-emerald-500/50 text-emerald-400 bg-emerald-500/5",
};

const FILTERS: { label: string; value: TaskStatus | "all" }[] = [
  { label: "All",         value: "all"         },
  { label: "To do",       value: "todo"        },
  { label: "In progress", value: "in-progress" },
  { label: "Done",        value: "done"        },
];

export function TaskList() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("studyos-tasks", []);
  const [filter, setFilter] = useState<TaskStatus | "all">("all");
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("medium");

  const addTask = () => {
    if (!title.trim()) return;
    const task: Task = {
      id: uid(),
      title: title.trim(),
      priority,
      status: "todo",
      createdAt: new Date().toISOString(),
    };
    setTasks([task, ...tasks]);
    setTitle("");
  };

  const updateStatus = (id: string, status: TaskStatus) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filtered = filter === "all" ? tasks : tasks.filter((t) => t.status === filter);
  const doneCount = tasks.filter((t) => t.status === "done").length;

  return (
    <div className="flex flex-col gap-6">

      {/* Add task */}
      <Card className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Add task</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="What needs to be done?"
            className="flex-1 rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/40 transition-all"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as TaskPriority)}
            className="rounded-xl bg-slate-800 border border-slate-700 px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-violet-500 transition-all cursor-pointer"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <Button onClick={addTask} variant="primary">Add</Button>
        </div>
      </Card>

      {/* Stats bar */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">
          <span className="font-bold text-white">{doneCount}</span> of{" "}
          <span className="font-bold text-white">{tasks.length}</span> tasks completed
        </p>
        <div className="flex gap-1">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150",
                filter === value
                  ? "bg-violet-600/20 text-violet-300 border border-violet-500/30"
                  : "text-slate-500 hover:text-slate-300 hover:bg-slate-800"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Task items */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-600">
            <div className="text-4xl mb-3">◻</div>
            <p className="text-sm">No tasks yet. Add one above.</p>
          </div>
        )}

        {filtered.map((task) => (
          <Card
            key={task.id}
            className={cn(
              "px-5 py-4 flex items-center gap-4 group transition-all duration-200",
              STATUS_STYLES[task.status]
            )}
          >
            {/* Checkbox */}
            <button
              onClick={() =>
                updateStatus(task.id, task.status === "done" ? "todo" : "done")
              }
              className={cn(
                "h-5 w-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all",
                task.status === "done"
                  ? "border-emerald-500 bg-emerald-500"
                  : "border-slate-600 hover:border-violet-500"
              )}
            >
              {task.status === "done" && (
                <span className="text-white text-[10px]">✓</span>
              )}
            </button>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <p
                className={cn(
                  "text-sm font-medium truncate",
                  task.status === "done"
                    ? "line-through text-slate-600"
                    : "text-slate-200"
                )}
              >
                {task.title}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">{formatDate(task.createdAt)}</p>
            </div>

            {/* Priority badge */}
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border",
                PRIORITY_STYLES[task.priority]
              )}
            >
              {task.priority}
            </span>

            {/* Status cycle */}
            <button
              onClick={() => {
                const cycle: TaskStatus[] = ["todo", "in-progress", "done"];
                const next = cycle[(cycle.indexOf(task.status) + 1) % cycle.length];
                updateStatus(task.id, next);
              }}
              className="text-[10px] text-slate-600 hover:text-slate-300 transition-colors opacity-0 group-hover:opacity-100"
              title="Cycle status"
            >
              ⟳
            </button>

            {/* Delete */}
            <button
              onClick={() => deleteTask(task.id)}
              className="text-slate-700 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-sm"
              title="Delete"
            >
              ✕
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}