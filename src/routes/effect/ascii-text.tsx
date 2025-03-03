import { FlexWrapper } from "@component/FlexWrapper";

import { ASCIIText } from "@/components/reactbits/AsciiText";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function ASCIITextPage() {
  setCreditsTo("reactbits", "https://www.reactbits.dev/text-animations/ascii-text");

  const text: string = "heyy";

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div className="border-2 border-dashed border-blue-500 relative h-128 bg-night">
        <ASCIIText
          text={text}
          enableWaves={true}
          asciiFontSize={8}
        />
      </div>
    </FlexWrapper>
  );
}
