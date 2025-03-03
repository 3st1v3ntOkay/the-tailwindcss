import { FlexWrapper } from "@component/FlexWrapper";
import { FallingText } from "@component/reactbits/FallingText";
import { setCreditsTo } from "@route/utils/setCreditsTo";

export function FallingTextPage() {
  setCreditsTo("reactbits", "https://www.reactbits.dev/text-animations/falling-text");

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div className="border-2 border-dashed border-blue-500 relative h-128 bg-night text-white">
        <FallingText
          text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
          highlightWords={["React", "Bits", "animated", "components", "simplify"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </FlexWrapper>
  );
}
