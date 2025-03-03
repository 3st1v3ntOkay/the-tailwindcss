import { FlexWrapper } from "@component/FlexWrapper";
import { Magnet } from "@component/reactbits/Magnet";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function MagnetPage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <Magnet padding={50} disabled={false} magnetStrength={50}>
        <p>Star React Bits on GitHub!</p>
      </Magnet>
    </FlexWrapper>
  );
}
