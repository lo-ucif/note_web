import Option from "./Option";
import icon01 from "../assets/Addicon";
import icon02 from "../assets/Deleticon";

export default function Command() {
  return (
    <div className="flex flex-row items-center justify-between px-1">
      <div className="text-3xl">notes</div>
      <div className="flex flex-row gap-3">
        <Option Icon={icon01} message="Add icon" />
        <Option Icon={icon02} message="Delete icon" />
      </div>
    </div>
  );
}
