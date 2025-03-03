import { FlexWrapper } from "@component/FlexWrapper";
import { ElasticSlider } from "@component/reactbits/ElasticSlider";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function ElasticSliderPage() {
  setCreditsTo("reactbits", "https://www.reactbits.dev/components/elastic-slider");

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <ElasticSlider
        leftIcon={<>left icon</>}
        rightIcon={<>right icon</>}
        startingValue={500}
        defaultValue={750}
        maxValue={1000}
        isStepped
        stepSize={10}
      />
    </FlexWrapper>
  );
}
