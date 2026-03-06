import Goodmorning from "../components/goodmorning";
import Notesadd from "../components/notes-add";
// import Allnote from "../components/Allnote";
import Info from "../components/info";
export default function Homepagenote() {
  return (
    <div className="flex p-5 flex-col gap-2.5 items-center justify-center w-full h-fit">
      <Goodmorning />
      <Notesadd />
      {/* <Allnote /> */}
      <Info />
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </div>
  );
}
