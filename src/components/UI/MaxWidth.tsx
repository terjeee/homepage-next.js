interface Props {
  children: React.ReactNode;
  width: "max-w-screen-sm" | "max-w-screen-md" | "max-w-screen-lg" | "max-w-screen-xl";
  className?: string;
}

export default function MaxWidth(props: Props) {
  return <div className={`${props.width} mx-auto px-6 ${props.className}`}>{props.children}</div>;
}
