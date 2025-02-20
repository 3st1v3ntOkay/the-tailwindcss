import { Flex } from "@radix-ui/themes";
import type { ReactNode } from "react";

export function TextIcon({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Flex
      as="div"
      align="center"
      gapX={"2"}
      className="bg-white-smoke hover:bg-reversed rounded-full p-2 font-geist font-semibold pr-4 cursor-pointer"
    >
      {children}
    </Flex>
  );
}
