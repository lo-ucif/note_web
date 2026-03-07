import logo02 from "../assets/Searchicon";
import Command from "../components/Command";
import Option from "../components/Option";
import Note from "../components/Note";
export default function Homepage() {
  return (
    <div className="flex w-full flex-col gap-2.5">
      <Command />
      <Option Icon={logo02} title="Search" />

      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </div>
  );
}
