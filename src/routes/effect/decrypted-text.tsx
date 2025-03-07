import { FlexWrapper } from "@component/FlexWrapper";
import { DecryptedText } from "@component/reactbits/DecryptedText";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function DecryptedTextPage() {
  setCreditsTo("reactbits", "https://www.reactbits.dev/text-animations/decrypted-text");

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <DecryptedText text="Hover me!" />

      <DecryptedText
        text="Customize me"
        speed={100}
        maxIterations={20}
        characters="ABCD1234!?"
        className="revealed"
        parentClassName="all-letters"
        encryptedClassName="encrypted"
      />

      <div style={{ marginTop: '4rem' }}>
        <DecryptedText
          text="This text animates when in view"
          animateOn="view"
          revealDirection="center"
        />
      </div>
    </FlexWrapper>
  );
}
