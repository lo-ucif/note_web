import "../style/style.css";
import Logo01 from "../assets/Onenoteicon";
import Logo02 from "../assets/Allnoteicon";
import "../style/animation.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NoteActiveContext } from "../context/notecontext";

type note = {
  titlen: string;
  descn: string;
  daten: string;
};
export default function Note({ titlen, descn, daten }: note) {
  const context = useContext(NoteActiveContext);

  if (!context) {
    throw new Error("Must be used within NoteProvider");
  }

  const { settitle, setdesc } = context;

  return (
    <motion.button
      onClick={() => {
        settitle(titlen);
        setdesc(descn);
      }}
      className="basecolor flex flex-col  p-5 gap-3  w-full "
      whileHover={{
        boxShadow: "0px 0px 10px #FFD900",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{}}
    >
      <div className="flex justify-between items-start content-start">
        <div className="flex flex-col items-start w-[60%] gap-3">
          <div className="text-3xl text-white">
            {titlen.split(" ").slice(0, 3).join(" ") +
              (titlen.split(" ").length > 10 ? "....." : "")}
          </div>
          <div className="text-l text-[#BBB] leading-relaxed">
            {descn.split(" ").slice(0, 3).join(" ") +
              (descn.split(" ").length > 3 ? "..." : "")}
          </div>
        </div>
        <Logo01 />
      </div>
      <div className="flex flex-row justify-between items-center">
        <Logo02 />

        <div className="text-[12px] text-[#FFD900]">{String(daten)}</div>
      </div>
    </motion.button>
  );
}
