import { SVGProps } from "react";

export default function IconHome(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 16a3 3 0 0 0-6 0v4H4V10l4-3.5M12 3l8 7v10h-5"
      />
    </svg>
  );
}
