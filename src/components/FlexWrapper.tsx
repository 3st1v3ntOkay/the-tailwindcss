import { Flex } from "@radix-ui/themes";

import type { ReactNode } from "react";

type ColorsAvailable = "red" | "orange" | "yellow" | "green" | "blue" | "violet";

export function FlexWrapper({
  children,
  mode = "dev",
  color = "blue",
}: {
  children: ReactNode;
  mode: "dev" | "prod";
  color: ColorsAvailable;
}) {
  const whichMode: string = mode === "dev" ? `border-2 border-dashed border-${color}-500 rounded-lg` : "";

  return (
    <Flex
      direction="column"
      className={`${whichMode} p-2`}
    >
      {children}
    </Flex>
  );
}