import { FlexWrapper } from "@component/FlexWrapper";
import { LetterGlitch } from "@component/reactbits/LetterGlitch";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function LetterGlitchPage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
    </FlexWrapper>
  );
}
