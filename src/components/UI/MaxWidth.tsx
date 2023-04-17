import type { PropsChildren } from "@/types/types";

export default function MaxWidth({ children }: PropsChildren) {
  return <div className="px-2 max-w-screen-lg mx-auto">{children}</div>;
}
