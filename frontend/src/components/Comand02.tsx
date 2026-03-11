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

type status = {
  state: boolean | undefined;
  setstate: (value: boolean) => void;
};
export default function Command02({ state, setstate }: status) {
  const [completed, setCompleted] = useState(false);
  const toggleComplete = () => {
    setCompleted(!completed);
    setstate(!state);
  };
  const context = useContext(NoteActiveContext);

  if (!context) {
    throw new Error("Must be used within NoteProvider");
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteNote(id);
      console.log("note deleted");
    } catch (error) {
      console.log(error);
    }
  };
  const { id } = context;

  return (
    <div className="flex flex-row items-center justify-between px-1">
      <div className="flex flex-row items-center">
        <Link to="/">
          <Option Icon={Return} message="Return" />
        </Link>

        <div className="text-3xl">note</div>
      </div>

      <div className="flex flex-row gap-3">
        <Option Icon={Savedicon} message="Save note" />

        <button onClick={toggleComplete}>
          <Option
            Icon={completed ? Complet02 : Complet01}
            message="State changed"
          />
        </button>

        <button onClick={() => handleDelete(id!)}>
          <Option Icon={Deleticon} message={"not deleted"} />
        </button>
      </div>
    </div>
  );
}
