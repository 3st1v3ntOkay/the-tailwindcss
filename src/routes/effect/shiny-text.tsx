import { FlexWrapper } from "@component/FlexWrapper";
import { ShinyText } from "@component/reactbits/ShinyText";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function ShinyTextPage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div className="bg-night">
        <ShinyText
          text="Just some shiny text!"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
    </FlexWrapper>
  );
}
