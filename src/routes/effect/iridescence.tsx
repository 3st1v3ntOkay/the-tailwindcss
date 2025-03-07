import { FlexWrapper } from "@component/FlexWrapper";
import { Iridescence } from "@component/reactbits/Iridescence";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function IridescencePage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <Iridescence
        color={[1, 1, 1]}
        mouseReact={false}
        amplitude={0.1}
        speed={1.0}
      />
    </FlexWrapper>
  );
}
