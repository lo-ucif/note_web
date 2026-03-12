import "../style/style.css";
import Logo01 from "../assets/Onenoteicon";
import "../style/animation.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NoteActiveContext } from "../context/notecontext";

export default function Noteallinfo() {
  const context = useContext(NoteActiveContext);

  if (!context) {
    throw new Error("Must be used within NoteProvider");
  }

  const { title, desc, settitle, setdesc, date, completed } = context;
  const comp = completed ? "completed" : "notcompleted";
  return (
    <motion.div
      className="basecolor flex flex-col  p-5 gap-3  w-full "
      whileHover={{
        boxShadow: "0px 0px 10px #FFD900",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{}}
    >
      <div className="flex justify-between items-start content-start">
        <div className="flex flex-col items-start w-[60%] gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="text-3xl text-white bg-transparent border-b border-gray-500 focus:outline-none w-full"
          />
        </div>
        <Logo01 />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-[12px] text-[#FFD900]">{comp}</div>
        <div className="text-[12px] text-[#FFD900]">{date}</div>
      </div>
      <textarea
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
        className="text-l text-[#BBB] leading-relaxed bg-transparent border border-gray-500 rounded p-2 w-full focus:outline-none"
        rows={6}
      />
    </motion.div>
  );
}
