import "../style/style.css";
export default function Notesadd() {
  return (
    <div className="flex py-2.5 px-1 flex-row justify-between items-center w-full h-fit ">
      <div className="flex items-center text-[30px] font-semibold">Notes</div>
      <div className="flex w-fit gap-1.5 items-center color px-2.5 py-1.5">
        <div>add</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M15 2.5C8.09625 2.5 2.5 8.09625 2.5 15C2.5 21.9037 8.09625 27.5 15 27.5C21.9037 27.5 27.5 21.9037 27.5 15C27.5 8.09625 21.9037 2.5 15 2.5ZM21.25 16.25H16.25V21.25H13.75V16.25H8.75V13.75H13.75V8.75H16.25V13.75H21.25V16.25Z"
            fill="#FFD900"
          />
        </svg>
      </div>
    </div>
  );
}
