import { SVGProps } from "react";

export default function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 26" {...props}>
      <title>Contact</title>
      <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="m4 8.2 8 5.9 8-5.9" />
        <rect width={18} height={14} x={3} y={6.5} rx={2} ry={2} />
      </g>
    </svg>
  );
}
