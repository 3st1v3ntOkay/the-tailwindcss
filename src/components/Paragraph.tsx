import type { ReactNode } from "react";

export function Paragraph({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="w-[500px]">
      {children}
    </p>
  );
}
