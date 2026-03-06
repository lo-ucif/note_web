import Search from "./Search";
import Note from "./Note";
export default function Allnotesearch() {
  return (
    <div className="flex w-[30%] flex-col  gap-2.5  ">
      <Search />
      <div className="flex flex-col gap-2.5 items-start   ">
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
