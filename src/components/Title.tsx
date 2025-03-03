import type { ReactNode } from "react";

export function Title({
  children,
  type,
  customStyles = ""
}: {
  children: ReactNode;
  type: "h1" | "h2";
  customStyles?: string;
}) {
  return (
    <>
      {type === "h1" ? (
        <h1 className={`font-geist font-semibold text-xl text-night ${customStyles}`}>
          {children}
        </h1>
      ) : (
        <h2 className={`font-geist font-medium text-md text-night ${customStyles}`}>
          {children}
        </h2>
      )}
    </>
  );
}