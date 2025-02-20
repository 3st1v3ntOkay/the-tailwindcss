import { whichMode } from "./utils/whichMode";

import type { ReactNode } from "react";
import type { ColorsAvailable, Mode } from "./utils/whichMode";

type FlexDirection = "flex-row" | "flex-col" | "row-reverse" | "flex-row-reverse";

export function FlexWrapper({
  children,
  mode = "dev",
  color = "border-blue-500",
  gap = "2",
  direction = "flex-col",
  padding = true,
}: {
  children: ReactNode;
  mode: Mode;
  color: ColorsAvailable;
  gap: string | "justify-between";
  direction: FlexDirection;
  padding: boolean;
}) {
  const isBetween: string = gap === "justify-between" ? "justify-between items-center" : `gap-${gap}`;
  const isPadding: string = padding === true ? "p-2" : "";

  console.log(`gap-${gap}`)

  return (
    <div className={`flex rounded-lg ${isBetween} ${direction} ${isPadding} ${whichMode(mode, color)}`}>
      {children}
    </div>
  );
}