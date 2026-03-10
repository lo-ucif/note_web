import axios from "axios";

const API = "http://localhost:3000/note";

type Inote = {
  title: string;
  desc: string;
  userid: number;
  status: "completed" | "notcompleted";
};

export const addNote = async (note: Inote) => {
  const res = await axios.post(`${API}/addnote`, note);

  return res.data;
};
