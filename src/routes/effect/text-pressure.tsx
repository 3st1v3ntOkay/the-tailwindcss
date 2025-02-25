import { FlexWrapper } from "@component/FlexWrapper";
import { TextPressure } from "@component/reactbits/TextPressure";

export function TextPressurePage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div className="relative h-fit bg-night">
        <TextPressure
          text="Hello!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
    </FlexWrapper>
  );
}
