import { Flex } from "@radix-ui/themes";

import type { ReactNode } from "react";

export function ChildrenWrapper({
  children,
  border = true,
}: {
  children: ReactNode;
  border: boolean;
}) {
  let isBordered: string = border ? "border-2 border-dashed border-blue-600 rounded-lg" : "";

  return (
    <Flex direction="column" className={`${isBordered}  p-2`}>
      {children}
    </Flex>
  );
}