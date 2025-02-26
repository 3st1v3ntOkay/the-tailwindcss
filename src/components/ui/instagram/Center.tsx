import type { ReactNode } from "react";

export function Center({
  children,
  direction = "y",
  mode = "dev",
}: {
  children: ReactNode;
  direction: "x" | "y";
  mode: "dev" | "prod";
}) {
  const axis: string = direction === "x" ? "row" : "col";
  const whichMode: string = mode === "dev" ? "border-2 border-green-400 border-dashed" : "";

  return (
    <div className={`w-[464px] h-fit px-6 flex items-center flex-${axis} gap-4 ${whichMode}`}>
      {children}
    </div>
  );
}