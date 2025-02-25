import { FlexWrapper } from "@component/FlexWrapper";
import { ElasticSlider } from "@component/reactbits/ElasticSlider";

export function ElasticSliderPage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <ElasticSlider
        leftIcon={<>...your icon...</>}
        rightIcon={<>...your icon...</>}
        startingValue={500}
        defaultValue={750}
        maxValue={1000}
        isStepped
        stepSize={10}
      />
    </FlexWrapper>
  );
}
