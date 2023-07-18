import { SVGProps } from "react";

export default function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        className="stroke-black dark:stroke-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m4 12 6-6m-6 6 6 6m-6-6h10.5m5.5 0h-2.5"
      />
    </svg>
  );
}
