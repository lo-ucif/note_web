import Option from "./Option";
import Addicon from "../assets/Addicon";
import Deleticon from "../assets/Deleticon";
import Return from "../assets/Return";
import Savedicon from "../assets/Savedicon";
import Complet01 from "../assets/Saved01";
import Complet02 from "../assets/Saved02";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Command02() {
  const [completed, setCompleted] = useState(false);

  const toggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className="flex flex-row items-center justify-between px-1">
      <div className="flex flex-row items-center">
        <Link to="/">
          <Option Icon={Return} />
        </Link>

        <div className="text-3xl">note</div>
      </div>

      <div className="flex flex-row gap-3">
        <Option Icon={Addicon} />
        <Option Icon={Savedicon} />

        <button onClick={toggleComplete}>
          <Option Icon={completed ? Complet02 : Complet01} />
        </button>

        <Option Icon={Deleticon} />
      </div>
    </div>
  );
}
