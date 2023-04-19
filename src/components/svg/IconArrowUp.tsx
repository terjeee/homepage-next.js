import { SVGProps } from "react";

export default function IconArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 17V7l4 4m-6-2-2 2" />
    </svg>
  );
}
