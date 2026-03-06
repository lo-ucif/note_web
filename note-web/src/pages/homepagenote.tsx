import Goodmorning from "../components/goodmorning";
import Notesadd from "../components/notes-add";
// import Allnote from "../components/Allnote";
import Info from "../components/info";
export default function Homepagenote() {
  return (
    <div className="flex p-5 flex-col  items-center justify-start w-full h-screen overflow-hidden">
      <Goodmorning />
      <Notesadd />
      {/* <Allnote /> */}
      <Info />
    </div>
  );
}
