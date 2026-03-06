import Search from "./Search";
import Note from "./Note";
import "../style/style.css";
export default function Allnotesearch() {
  return (
    <div className="flex w-full flex-col  gap-2.5 h-full overflow-hidden ">
      <Search />
      <div className="flex-1 min-h-0 flex flex-col gap-2.5 items-start overflow-y-auto scroll-custom">
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
