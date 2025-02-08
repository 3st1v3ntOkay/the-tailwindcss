import { Flex } from "@radix-ui/themes";

import { Information } from "@/components/youtube/Information";
import { Navbar } from "@/components/youtube/Navbar";
import { Video } from "@/components/youtube/Video";

export function YouTube() {
  return (
    <Flex direction="column">
      <Navbar />
      <Video />
      <Information />
    </Flex>
  );
}
