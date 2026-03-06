import Textandlogo from "../components/Textandlogo";
import logo01 from "../assets/Personicon";
import Command from "../components/Command";
export default function Homepage() {
  return (
    <div className="flex w-full  flex-col gap-2.5 ">
      <Textandlogo Icon={logo01} title="Good Morning, Ahmed !" />
      <Command />
    </div>
  );
}
