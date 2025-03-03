import { FlexWrapper } from "@component/FlexWrapper";
import { ScrollVelocity } from "@component/reactbits/ScrollVelocity";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function ScrollVelocityPage() {
  const velocity: number = 50;

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <ScrollVelocity
        texts={['React Bits', 'Scroll Down']}
        velocity={velocity}
        className="custom-scroll-text"
      />
    </FlexWrapper>
  );
}
