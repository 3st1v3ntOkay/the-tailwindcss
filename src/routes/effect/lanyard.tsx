import { FlexWrapper } from "@component/FlexWrapper";
import { Lanyard } from "@component/reactbits/Lanyard";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function LanyardPage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </FlexWrapper>
  );
}
