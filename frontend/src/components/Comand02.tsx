import Option from "./Option";
import Deleticon from "../assets/Deleticon";
import Return from "../assets/Return";
import Savedicon from "../assets/Savedicon";
import Complet01 from "../assets/Saved01";
import Complet02 from "../assets/Saved02";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NoteActiveContext } from "../context/notecontext";
import { deleteNote } from "../services/noteservice";
import { updateNote } from "../services/noteservice";
import type { Inote } from "../services/noteservice";

type status = {
  state: boolean | undefined;
  setstate: (value: boolean) => void;
};
export default function Command02({ state, setstate }: status) {
  const getCurrentDateString = (): string => {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
  };
  const context = useContext(NoteActiveContext);
  if (!context) {
    throw new Error("Must be used within NoteProvider");
  }
  const { id, title, desc } = context;

  const [completed, setCompleted] = useState(false);
  const handleupdate = async (id: string) => {
    const currentDate = getCurrentDateString();
    const note: Inote = {
      title: title,
      desc: desc,
      status: completed ? "notcompleted" : "completed",
      createdAt: currentDate,
    };

    try {
      await updateNote(id, note);
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };
  const toggleComplete = () => {
    setCompleted(!completed);
    setstate(!state);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      console.log("note deleted");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between px-1">
      <div className="flex flex-row items-center">
        <Link to="/">
          <Option Icon={Return} message="Return" />
        </Link>

        <div className="text-3xl">note</div>
      </div>

      <div className="flex flex-row gap-3">
        <Link to="/info">
          <button onClick={() => handleupdate(id!)}>
            <Option Icon={Savedicon} message="Save note" />
          </button>
        </Link>
        <Link to="/info">
          <button onClick={() => toggleComplete}>
            <Option
              Icon={completed ? Complet02 : Complet01}
              message="State changed"
            />
          </button>
        </Link>
        <Link to="/">
          <button onClick={() => handleDelete(id!)}>
            <Option Icon={Deleticon} message={"not deleted"} />
          </button>
        </Link>
      </div>
    </div>
  );
}
