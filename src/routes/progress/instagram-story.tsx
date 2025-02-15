import { ChildrenWrapper } from "@/components/ChildrenWrapper";

export function IntagramStory() {
  const isChildrenBorder: boolean = true;

  return (
    <ChildrenWrapper border={isChildrenBorder}>
      <p className="font-geist">instagram story page</p>
    </ChildrenWrapper>
  );
}
