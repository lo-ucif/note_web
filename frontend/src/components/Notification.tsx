import "../style/style.css";
import Onenoteicon from "../assets/Onenoteiconmini";
import { UseNotification } from "../context/NotificationContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Notification() {
  const { active, message } = UseNotification();

  if (!active) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="basecolor3 text-white px-4 py-2 rounded flex flex-row items-center gap-2  shadow-[0_00px_5px] "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4 }}
      >
        <div>{message}</div>
        <Onenoteicon />
      </motion.div>
    </AnimatePresence>
  );
}
