import React from "react";
import "../style/style.css";
import { motion } from "framer-motion";
type info = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function Option({ Icon }: info) {
  return (
    <motion.div
      className="flex py-2.5 px-2.5 flex-row justify-between items-center w-full basecolor h-fit gap-1"
      whileHover={{
        boxShadow: "0px 0px 20px #FFD900",
        backgroundColor: "#FFD900",
      }}
      whileTap={{ backgroundColor: "#FFD900", scale: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-5 items-center justify-center rounded-full">
        <Icon />
      </div>
    </motion.div>
  );
}
