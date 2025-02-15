import { ChildrenWrapper } from "@/components/ChildrenWrapper";

export function InstagramStory() {
  const isChildrenBorder: boolean = true;

  return (
    <ChildrenWrapper border={isChildrenBorder}>
      <p className="font-geist">instagram story page</p>
    </ChildrenWrapper>
  );
}
