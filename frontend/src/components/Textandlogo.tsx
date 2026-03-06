import React from "react";
import "../style/style.css";
type info = {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
export default function Textandlogo({ Icon, title }: info) {
  return (
    <div className="flex py-2.5 px-5 flex-row justify-between items-center w-full basecolor h-fit">
      <div className="flex flex-row whitespace-nowrap text-xl">
        {title}
      </div>
      <div className="flex gap-5 items-center justify-center p-3 rounded-full">
        <Icon />
      </div>
    </div>
  );
}
