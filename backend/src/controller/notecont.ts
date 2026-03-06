import { Request, Response } from "express";
import note from "../models/note";

//add note in the db
export const addnote = async (req: Request, res: Response) => {
  try {
    const newNote = await note.create(req.body);
    res.json("note is created");
    console.log("note created");
  } catch (error) {
    res.json({
      message: "note not add",
      error,
    });
    console.log("note created ");
  }
};
//get all note for display in home
export const getallnote = async (req: Request, res: Response) => {
  try {
    const allnote = await note.find();
    if (!allnote) {
      res.json("no note as detected");
    } else {
      res.json(allnote);
    }
  } catch (error) {
    res.json(error);
  }
};
// get note if clicked in the note in the home (all information)
export const getnotebyid = async (req: Request, res: Response) => {
  try {
    const onenote = await note.findById(req.params.id);
    if (!onenote) {
      res.json("this note not found");
    } else {
      res.json(onenote);
    }
  } catch (error) {
    res.json(error);
  }
};
//delet note if selected
export const deletnote = async (req: Request, res: Response) => {
  try {
    const deletnote = await note.findByIdAndDelete(req.params.id);
    if (!deletnote) {
      res.json("the note has not found");
    } else {
      res.json("the note has deleted");
    }
  } catch (error) {
    res.json(error);
  }
};
//delet all note from the note
export const deletallnote = async (req: Request, res: Response) => {
  try {
    const allnote = await note.deleteMany();
    if (!allnote) {
      res.json("no note to deleted");
    } else {
      res.json("all note has deleted");
    }
  } catch (error) {
    res.json(error);
  }
};
//update note (set function if modify any and his clicked saved)
export const updatenote = async (req: Request, res: Response) => {
  try {
    const noteupdated = await note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
  } catch (error) {}
};
// update state (completed or not completed)
export const updatestate = async (req: Request, res: Response) => {
  try {
    const updatestate = await note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatestate) {
      res.json("the note not found");
    } else {
      res.json("the state is updated");
    }
  } catch (error) {
    res.json(error);
  }
};
