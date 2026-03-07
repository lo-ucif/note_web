import "../style/style.css";
import Logo01 from "../assets/Onenoteicon";
import Logo02 from "../assets/Allnoteicon";
export default function Note() {
  const yourText: string =
    "f io b ....d .descripe vezbg u  gejz ghzio hgiaz ogazih ghazoig iagoz hoigopej gjoez jigze oigiozh hzia  i fiz eb ...";

  return (
    <div className="flex flex-col  p-5 gap-3 basecolor w-full">
      <div className="flex justify-between items-start content-start">
        <div className="flex flex-col items-start w-[60%] gap-3">
          <div className="text-3xl text-white">hello first note</div>
          <div className="text-l text-[#BBB] w-[80%] leading-relaxed">
            {yourText.split(" ").slice(0, 12).join(" ") +
              (yourText.split(" ").length > 10 ? "....." : "")}
          </div>
        </div>
        <Logo01 />
      </div>
      <div className="flex flex-row justify-between items-center">
        <Logo02 />

        <div className="text-[12px] text-[#FFD900]">04/04/2026 8:21 pm</div>
      </div>
    </div>
  );
}
