import Command02 from "../components/Comand02";
import Noteallinfo from "../components/Noteallinfo";
// import { useState } from "react";
export default function Detailepage() {
  // const [notestate, setnotestate] = useState<boolean | undefined>();
  return (
    <div className="flex w-full flex-col gap-2.5">
      <Command02 />
      <Noteallinfo />
    </div>
  );
}
