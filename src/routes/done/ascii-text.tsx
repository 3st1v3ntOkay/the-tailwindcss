import { FlexWrapper } from "@component/FlexWrapper";

import { ASCIIText } from "@/components/reactbits/AsciiText";

export function AsciiText() {
  const text: string = "heyy";

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <ASCIIText
        text={text}
        enableWaves={true}
        asciiFontSize={8}
      />
    </FlexWrapper>
  );
}
