import { FlexWrapper } from "@component/FlexWrapper";
import { InfiniteMenu } from "@component/reactbits/InfiniteMenu";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function InfiniteMenuPage() {
  const items = [
    {
      image: "https://picsum.photos/300/300?grayscale",
      link: "https://google.com/",
      title: "Item 1",
      description: "This is pretty cool, right?"
    },
    {
      image: "https://picsum.photos/400/400?grayscale",
      link: "https://google.com/",
      title: "Item 2",
      description: "This is pretty cool, right?"
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?"
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?"
    }
  ];

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={items} />
      </div>
    </FlexWrapper>
  );
}
