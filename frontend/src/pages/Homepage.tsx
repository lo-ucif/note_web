import logo02 from "../assets/Searchicon";
import Command from "../components/Command";
import Search from "../components/Search";
import "../style/animation.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Inote } from "../services/noteservice";
import { getAllNotes } from "../services/noteservice";
import Note from "../components/Note";
import Loaderpage from "../components/Loaderpage";
import { Usesearch } from "../context/Searchcontext";

export default function Homepage() {
  const { text } = Usesearch();

  const [notes, setnotes] = useState<Inote[]>([]);

  useEffect(() => {
    const getnotefromdb = async () => {
      const data = await getAllNotes();
      setnotes(data);
    };

    getnotefromdb();
  }, []);

  // search by title
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(text.toLowerCase()),
  );

  // loading state
  if (notes.length === 0) {
    return (
      <div className="flex w-full flex-col gap-2.5">
        <Command />
        <Search Icon={logo02} title="Search" />

        <div className="flex items-center w-full h-full justify-center">
          <Loaderpage />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-2.5">
      <Command />
      <Search Icon={logo02} title="Search" />

      <motion.div
        initial={{ opacity: 0, x: 0, y: +2000 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-start gap-2.5 self-stretch"
      >
        {filteredNotes.length === 0 ? (
          <div className="w-full text-center text-gray-400">No notes found</div>
        ) : (
          filteredNotes.map((note: Inote) => (
            <Link key={note._id} to={`/info/`} className="w-full">
              <Note
                titlen={note.title}
                descn={note.desc}
                daten={new Date(note.createdAt).toLocaleDateString()}
                noteid={note._id}
                state={note.status}
              />
            </Link>
          ))
        )}
      </motion.div>
    </div>
  );
}
