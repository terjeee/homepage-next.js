import { SVGProps } from "react";

export default function IconSun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4V2m0 18v2M6.414 6.414 5 5m12.728 12.728 1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728 5 19.142M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
      />
    </svg>
  );
}
