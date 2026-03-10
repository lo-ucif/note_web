import Option from "./Option";
import Addicon from "../assets/Addicon";
import Deleticon from "../assets/Deleticon";
import Return from "../assets/Return";
import Savedicon from "../assets/Savedicon";
import Complet01 from "../assets/Saved01";
import Complet02 from "../assets/Saved02";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex flex-row items-center justify-between px-1">
      <div className="flex flex-row items-center">
        <Link to="/">
          <Option Icon={Return} message="Return"/>
        </Link>

        <div className="text-3xl">note</div>
      </div>

      <div className="flex flex-row gap-3">
        <Option Icon={Addicon} message="=Add icon"/>
        <Option Icon={Savedicon} message="Save icon"/>

        <button onClick={toggleComplete}>
          <Option Icon={completed ? Complet02 : Complet01} message="State changed"/>
        </button>

        <Option Icon={Deleticon} message="Delet icon"/>
      </div>
    </div>
  );
}
