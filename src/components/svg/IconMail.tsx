import { SVGProps } from "react";

export default function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M2.8 4c-.935 0-1.753.47-2.256 1.168A2.904 2.904 0 0 0 0 6.867v10.266C0 18.682 1.22 20 2.8 20h7.4a1 1 0 1 0 0-2H2.8c-.408 0-.8-.353-.8-.867V7.948l5.78 6.362a3 3 0 0 0 4.44 0L18 7.948v4.185a1 1 0 1 0 2 0V6.867c0-.632-.2-1.221-.544-1.7A2.777 2.777 0 0 0 17.2 4H2.8Zm6.46 8.965L2.933 6h14.134l-6.327 6.965a1 1 0 0 1-1.48 0Zm9.033 8.328a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L19.586 18H15a1 1 0 1 0 0 2h4.586l-1.293 1.293Z"
        clipRule="evenodd"
      />
    </svg>
  );
}