import axios from "axios";

const API = "https://note-web-r25n.onrender.com/note";

export type Inote = {
  _id?: string;
  title: string;
  desc: string;
  userid?: number;
  status: "completed" | "notcompleted";
  createdAt: string;
};

//add note
export const addNote = async (note: Inote) => {
  const res = await axios.post(`${API}/`, note);

  return res.data;
};
//get all note
export const getAllNotes = async () => {
  const res = await axios.get(`${API}/`);
  return res.data;
};
//delet all note
export const deleteallNote = async () => {
  try {
    const res = await axios.delete(`${API}/`);
    return res.data;
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};
