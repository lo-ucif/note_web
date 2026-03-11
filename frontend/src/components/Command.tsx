import Option from "./Option";
import icon01 from "../assets/Addicon";
import icon02 from "../assets/Deleticon";
import { deleteallNote } from "../services/noteservice";
import { Link } from "react-router-dom";

export default function Command() {
  const handleDelete = async () => {
    try {
      await deleteallNote();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row items-center justify-between px-1">
      <div className="text-3xl">notes</div>
      <div className="flex flex-row gap-3">
        <Link to={"/creat"}>
          <Option Icon={icon01} message="Add icon" />
        </Link>

        <button onClick={handleDelete}>
          <Option Icon={icon02} message="Delete icon" />
        </button>
      </div>
    </div>
  );
}
