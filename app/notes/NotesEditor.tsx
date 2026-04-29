"use client";

import { useState } from "react";

export default function NotesEditor() {
  const [note, setNote] = useState("");

  return (
    <div className="w-full">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full h-[400px] p-4 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
      />
    </div>
  );
}