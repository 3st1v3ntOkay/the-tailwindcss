import type { ReactNode } from "react";

export function Title({
  children,
  type,
}: {
  children: ReactNode;
  type: "h1" | "h2";
}) {
  return (
    <>
      {type === "h1" ? (
        <h1 className="font-geist font-semibold text-xl">
          {children}
        </h1>
      ) : (
        <h2 className="font-geist font-medium text-md text-night">
          {children}
        </h2>
      )}
    </>
  );
}