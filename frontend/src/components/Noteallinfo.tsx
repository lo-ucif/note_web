import "../style/style.css";
import Logo01 from "../assets/Onenoteicon";
import "../style/animation.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NoteActiveContext } from "../context/notecontext";
type allinfo = {
  state: boolean | undefined;
};
export default function Noteallinfo({ state }: allinfo) {
  const context = useContext(NoteActiveContext);

  if (!context) {
    throw new Error("Must be used within NoteProvider");
  }

  const { title, desc } = context;
  const comp = state ? "notcompleted" : "completed";
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
          <div className="text-3xl text-white">{title}</div>
        </div>
        <Logo01 />
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="text-[12px] text-[#FFD900]">{comp}</div>
        <div className="text-[12px] text-[#FFD900]">04/04/2026 8:21 pm</div>
      </div>
      <div className="text-l text-[#BBB] leading-relaxed">{desc}</div>
    </motion.div>
  );
}
