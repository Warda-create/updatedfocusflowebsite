"use client";

import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { uid, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { Note } from "@/types/note";

export function NotesEditor() {
  const [notes, setNotes] = useLocalStorage<Note[]>("studyos-notes", []);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  // Get selected note
  const selectedNote = notes.find((n) => n.id === selectedNoteId) || null;

  // Editor state
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // Sync editor when selected note OR notes array changes
  useEffect(() => {
    if (!selectedNote) {
      setEditTitle("");
      setEditContent("");
      return;
    }

    setEditTitle(selectedNote.title);
    setEditContent(selectedNote.content);
  }, [selectedNote, notes]);

  // Create note
  const createNote = () => {
    const note: Note = {
      id: uid(),
      title: "Untitled Note",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setNotes((prev) => [note, ...prev]);
    setSelectedNoteId(note.id);
  };

  // Delete note
  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));

    if (selectedNoteId === id) {
      setSelectedNoteId(null);
    }
  };

  // Save note
  const handleSave = () => {
    if (!selectedNoteId) return;

    const now = new Date().toISOString();

    setNotes((prev) =>
      prev.map((n) =>
        n.id === selectedNoteId
          ? {
              ...n,
              title: editTitle,
              content: editContent,
              updatedAt: now,
            }
          : n
      )
    );

    // 🔥 FIX: force editor to stay in sync after save
    setSelectedNoteId(selectedNoteId);
  };

  // Unsaved changes detection
  const isDirty =
    selectedNote !== null &&
    (editTitle !== selectedNote.title ||
      editContent !== selectedNote.content);


    return (
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8  pb-8">

    {/* Page Title */}
    <h1 className="text-3xl font-bold mb-6">Notes</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[70vh]">

      {/* LEFT SIDEBAR */}
      <div className="flex flex-col gap-4">

        <Button onClick={createNote} className="w-full">
          + New Note
        </Button>

        <div className="flex flex-col gap-3">
          {notes.length === 0 ? (
            <p className="text-slate-500 text-sm py-6 text-center">
              No notes yet. Create one above!
            </p>
          ) : (
            notes.map((note) => (
              <Card
                key={note.id}
                hover
                onClick={() => setSelectedNoteId(note.id)}
                className={`p-4 cursor-pointer transition border ${
                  selectedNoteId === note.id
                    ? "border-violet-500 bg-slate-800"
                    : "border-transparent"
                }`}
              >
                <h3 className="font-semibold text-white truncate">
                  {note.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {formatDate(note.updatedAt)}
                </p>
              </Card>
            ))
          )}
        </div>

      </div>

      {/* RIGHT EDITOR */}
      <div className="md:col-span-2">

        {selectedNote ? (
          <Card className="flex flex-col">

            <div className="flex flex-col gap-5 p-5 md:p-6">

              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Note title..."
                className="text-lg md:text-xl font-semibold bg-transparent border-b border-slate-700 pb-2 focus:outline-none focus:border-violet-500"
              />

              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="Write your note here..."
                className="w-full min-h-[300px] md:min-h-[400px] px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 resize-none"
              />

            </div>

          </Card>
        ) : (
          <Card className="flex items-center justify-center p-6 min-h-[300px]">
            <p className="text-slate-500 text-center">
              Select a note to edit or create a new one
            </p>
          </Card>
        )}

      </div>

    </div>

  </div>
);

}