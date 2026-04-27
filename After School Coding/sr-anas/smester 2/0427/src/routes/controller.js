import { nanoid } from "nanoid";
import { notes } from "../data/notes.js";

export const createNote = (req, res) => {
  const { title, content } = req.body;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const newNote = { id, title, content, createdAt, updatedAt };
  notes.push(newNote);
  const isSuccess = notes.find((note) => note.id === id);
  if (isSuccess) {
    return res.status(201).json({
      message: "Note created successfully",
      note: newNote,
      data: { noteId: id }
    });
  }

  return res.status(500).json({
    status: "fail",
    message: "Failed to create note"
    });
};

export const getNotes = (_, res) => {
  return res.json({
    status: "success",
    data : { notes }
  });
};

export const getNoteById = (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note.id === id);
  if (note) {
    return res.json({
      status: "success",
      data: { note }
    });

    return res.status(404).json({
      status: "fail",
      message: "Catatan tidak Ditemukan"
    })
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