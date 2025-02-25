import { FlexWrapper } from "@component/FlexWrapper";
import { StarBorder } from "@component/reactbits/StarBorder";

export function StarBorderPage() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <StarBorder
        as="button"
        className="custom-class"
        color="cyan"
        speed="5s"
      >

      </StarBorder>
    </FlexWrapper>
  );
}
