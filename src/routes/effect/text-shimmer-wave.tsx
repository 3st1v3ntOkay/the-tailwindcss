import { FlexWrapper } from "@component/FlexWrapper";
import { TextShimmerWave } from "@component/motion-primitives/text-shimmer-wave";

export function TextShimmerWavePage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <TextShimmerWave className='font-mono text-sm' duration={1}>
        Generating code...
      </TextShimmerWave>
    </FlexWrapper>
  );
}
