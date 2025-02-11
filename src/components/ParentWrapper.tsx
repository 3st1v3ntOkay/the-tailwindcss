import { Flex } from "@radix-ui/themes";

import type { ReactNode } from "react";

export function ParentWrapper({
  children,
  border = true,
}: {
  children: ReactNode;
  border: boolean;
}) {
  let isBordered: string = border ? "border-2 border-dashed border-green-600 rounded-lg" : "";

  return (
    <Flex direction="column" gap="4" className={`${isBordered} p-1`}>
      {children}
    </Flex>
  );
}