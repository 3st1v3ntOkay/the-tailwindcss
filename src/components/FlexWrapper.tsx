import { Flex } from "@radix-ui/themes";

import type { ReactNode } from "react";

type ColorsAvailable = "red" | "orange" | "yellow" | "green" | "blue" | "violet";

type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

type FlexGap = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

export function FlexWrapper({
  children,
  mode = "dev",
  color = "blue",
  gap = "2",
  direction = "column"
}: {
  children: ReactNode;
  mode: "dev" | "prod";
  color: ColorsAvailable;
  gap: FlexGap;
  direction: FlexDirection;
}) {
  const whichMode: string = mode === "dev" ? `border-2 border-dashed border-${color}-500 rounded-lg` : "";

  return (
    <Flex
      className={`${whichMode} p-2`}
      gap={gap}
      direction={direction}
    >
      {children}
    </Flex>
  );
}