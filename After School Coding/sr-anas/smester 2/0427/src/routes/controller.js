import { nanoid } from "nanoid";
import { notes } from "../data/notes.js";

export const createNote = (req, res) => {
  const { title, content } = req.body;
  const newNote = {
    id: nanoid(),
    title,
    content,
  };
  notes.push(newNote);
  res.json(newNote);
};

export const getNotes = (_, res) => {
  res.json(notes);
};

export const getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.json(note);
};

export const editNoteById = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = notes.find((note) => note.id === id);
    if (!note) {
    return res.status(404).json({ message: "Note not found" });
    }
    note.title = title;
    note.content = content;
    res.json(note);
};

export const deleteNoteById = (req, res) => {
  const { id } = req.params;
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }
  notes.splice(noteIndex, 1);
  res.json({ message: "Note deleted successfully" });
};