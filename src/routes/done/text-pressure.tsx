import { FlexWrapper } from "@component/FlexWrapper";
import { TextPressure } from "@component/reactbits/TextPressure";

export function AsciiText() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div style={{ position: 'relative', height: '300px' }}>
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
