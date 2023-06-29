import { SVGProps } from "react";

export default function IconCode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeWidth={2} d="m11 16 2-8" className="stroke-black dark:stroke-white" />
      <path
        className="stroke-black dark:stroke-white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17 15 2.696-2.696v0a.43.43 0 0 0 0-.608v0L17 9M7 9l-2.678 2.678v0a.455.455 0 0 0 0 .643v0L7 15"
      />
    </svg>
  );
}
