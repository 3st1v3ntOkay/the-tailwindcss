import type { ReactNode } from "react";

export function TopBottomSection({
  children,
  mode = "dev",
  position,
}: {
  children: ReactNode;
  mode: "dev" | "prod";
  position: "top" | "bottom";
}) {
  const whichMode: string = mode === "dev" ? "border-2 border-purple-400 border-dashed" : "";

  return (
    <>
      {position === "top" ? (
        <div className={`absolute top-8 left-0 w-full flex items-center justify-center ${whichMode}`}>
          {children}
        </div>
      ) : (
        <div className={`absolute bottom-8 left-0 w-full flex items-center justify-center ${whichMode}`}>
          {children}
        </div>
      )}
    </>

  );
}