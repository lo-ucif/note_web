import "../style/style.css";
import Onenoteicon from "../assets/Onenoteicon";
import { useNotification } from "../context/NotificationContext";
import { motion } from "framer-motion";

export default function Notification() {
  const { active, message } = useNotification();

  if (!active) return null;

  return (
    <motion.div className="basecolor2 text-white px-4 py-2 rounded flex flex-row items-center gap-2"
    initial>
      <div>{message}</div>
      <Onenoteicon />
    </motion.div>
  );
}
