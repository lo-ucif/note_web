import logo02 from "../assets/Searchicon";
import Command from "../components/Command";
import Note from "../components/Note";
import Search from "../components/Search";
import "../style/animation.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <Command />
      <Search Icon={logo02} title="Search" />

      <motion.div
        initial={{ opacity: 0, x: -2000, y: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.01 }}
        className="flex flex-col items-start gap-2.5 self-stretch "
      >
        <Link to="/info" className="w-full">
          <Note />
        </Link>{" "}
        <Link to="/info" className="w-full">
          <Note />
        </Link>{" "}
        <Link to="/info" className="w-full">
          <Note />
        </Link>{" "}
        <Link to="/info" className="w-full">
          <Note />
        </Link>{" "}
        <Link to="/info" className="w-full">
          <Note />
        </Link>{" "}
        <Link to="/info" className="w-full">
          <Note />
        </Link>{" "}
        <Link to="/info" className="w-full">
          <Note />
        </Link>
      </motion.div>
    </div>
  );
}
