import { Flex } from "@radix-ui/themes";
import { IconImage } from "./IconImage";

import type { ReactNode } from "react";

import SearchIcon from "@/assets/youtube/icons/search.svg";

export function Search({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Flex
      as="div"
      justify="between"
      className="border-2 border-reversed rounded-full w-[350px] overflow-hidden"
    >
      <Flex
        as="span"
        align="center"
        className="text-night pl-4"
      >
        {children}
      </Flex>

      <div
        className="bg-white-smoke border-l-2 border-reversed px-3 flex align-middle justify-center"
      >
        <IconImage
          icon={SearchIcon}
          iconSize={24}
          iconAlt="search icon"
        />
      </div>
    </Flex>
  );
}
