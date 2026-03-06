import "../style/style.css";
import Allnotesearch from "./Allnotesearch";
export default function Info() {
  return (
    <div className="flex  items-center justify-items-start gap-5 flex-wrap w-full flex-1 min-h-0 overflow-y-auto">
      <Allnotesearch />
    </div>
  );
}
