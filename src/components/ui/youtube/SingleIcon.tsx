import { Box } from "@radix-ui/themes";
import type { ReactNode } from "react";

export function SingleIcon({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box as="div" className="bg-white-smoke hover:bg-reversed rounded-full p-2 cursor-pointer">
      {children}
    </Box>
  );
}
