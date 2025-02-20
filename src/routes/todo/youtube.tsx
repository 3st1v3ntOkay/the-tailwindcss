import { FlexWrapper } from "@component/FlexWrapper";

import { Information } from "@component/ui/youtube/Information";
import { Navbar } from "@component/ui/youtube/Navbar";
import { Video } from "@component/ui/youtube/Video";

export function YouTube() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <Navbar />
      <Video />
      <Information />
    </FlexWrapper>
  );
}
