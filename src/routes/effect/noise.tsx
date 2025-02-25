import { FlexWrapper } from "@component/FlexWrapper";
import { Noise } from "@component/reactbits/Noise";

export function NoisePage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden' }}>
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>
    </FlexWrapper>
  );
}
