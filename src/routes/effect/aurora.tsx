import { FlexWrapper } from "@component/FlexWrapper";
import { Aurora } from "@component/reactbits/Aurora";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function AuroraPage() {
  setCreditsTo("reactbits", "https://www.reactbits.dev/backgrounds/aurora");

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
    </FlexWrapper>
  );
}
