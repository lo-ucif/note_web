import "../style/style.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { addNote } from "../services/noteservice";
import type { Inote } from "../services/noteservice";
export default function Creatnote() {
  const getCurrentDateString = (): string => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
  };
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [date01, setdate] = useState("");

  const handleSubmit = async () => {
    setdate(getCurrentDateString());
    const note: Inote = {
      title: name,
      desc: desc,
      status: "notcompleted",
      createdAt: date01,
    };

    try {
      const res = await addNote(note);
      console.log("Note added:", res);
      setname("");
      setdesc("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div className="flex w-full flex-col gap-2.5">
      <motion.button
        className="rounded w-fit px-8 py-2 text-black basecolor4 "
        transition={{ duration: 0.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSubmit}
      >
        save
      </motion.button>
      <div>Name</div>
      <input
        type="text"
        className="basecolor p-4"
        value={name}
        placeholder="Enter name of note..."
        onChange={(e) => setname(e.target.value)}
      />
      <div>Descrip</div>
      <textarea
        className="basecolor px-6 py-4 w-full rounded min-h-75"
        placeholder="Enter description..."
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
      />
    </div>
  );
}
