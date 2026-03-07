import React from "react";
import "../style/style.css";
type info = {
  title: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
export default function Search({ Icon, title }: info) {
  return (
    <div className="flex py-2.5 px-2.5 flex-row justify-between items-center w-full basecolor h-fit gap-1">
      <div className="flex flex-row whitespace-nowrap">{title}</div>
      <div className="flex gap-5 items-center justify-center rounded-full">
        <Icon />
      </div>
    </div>
  );
}
