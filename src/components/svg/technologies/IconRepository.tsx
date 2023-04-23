import type { SVGProps } from "react";

export default function SvgGithubRepository(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" role="img" {...props}>
      <path
        style={{
          textIndent: 0,
          textAlign: "start",
          lineHeight: "normal",
          textTransform: "none",
          // blockProgression: "tb",
          // inkscapeFontSpecification: "Sans",
        }}
        d="M10 2C8.355 2 7 3.355 7 5v36c0 1.645 1.355 3 3 3h3v4.625l1.438-.719L18 46.125l3.563 1.781 1.437.719V44h17c1.645 0 3-1.355 3-3V5c0-1.645-1.355-3-3-3H10zm0 2h30c.565 0 1 .435 1 1v29H9V5c0-.565.435-1 1-1zm3 3v6h6V7h-6zm2 2h2v2h-2V9zm-2 7v6h6v-6h-6zm2 2h2v2h-2v-2zm-2 7v6h6v-6h-6zm2 2h2v2h-2v-2zm-6 9h32v5c0 .565-.435 1-1 1H23v-4H13v4h-3c-.565 0-1-.435-1-1v-5zm6 4h6v5.375l-2.563-1.281-.437-.219-.438.219L15 45.375V40z"
      />
    </svg>
  );
}
