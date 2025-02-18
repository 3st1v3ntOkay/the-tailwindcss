import { FlexWrapper } from "@/components/FlexWrapper";

import { Information } from "@/components/youtube/Information";
import { Navbar } from "@/components/youtube/Navbar";
import { Video } from "@/components/youtube/Video";

export function YouTube() {
  return (
    <FlexWrapper mode="dev" color="blue">
      <Navbar />
      <Video />
      <Information />
    </FlexWrapper>
  );
}
