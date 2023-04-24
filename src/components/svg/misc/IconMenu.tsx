import { SVGProps } from "react";

export default function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={15} fill="none" viewBox="3.5 6.5 17 11" {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 17h4m4 0h8M4 12h16M4 7h8m4 0h4"
      />
    </svg>
  );
}
