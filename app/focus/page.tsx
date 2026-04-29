import { Timer } from "@/components/focus/Timer";

export default function FocusPage() {
  return (
    <div className="py-8 px-2 pt-8">
      <h1 className="text-3xl font-bold mb-8">Focus Mode</h1>
      <Timer />
    </div>
  );
}