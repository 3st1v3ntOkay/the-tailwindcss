import { ChildrenWrapper } from "@/components/ChildrenWrapper";

import { Information } from "@/components/youtube/Information";
import { Navbar } from "@/components/youtube/Navbar";
import { Video } from "@/components/youtube/Video";

export function YouTube() {
  const isParentBorder: boolean = true;

  return (
    <ChildrenWrapper border={isParentBorder}>
      <Navbar />
      <Video />
      <Information />
    </ChildrenWrapper>
  );
}
