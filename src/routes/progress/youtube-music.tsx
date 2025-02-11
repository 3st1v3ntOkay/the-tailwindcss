import { ChildrenWrapper } from "@/components/ChildrenWrapper";

export function YouTubeMusic() {
  const isChildrenBorder: boolean = true;

  return (
    <ChildrenWrapper border={isChildrenBorder}>
      <p className="font-geist">youtube music page</p>
    </ChildrenWrapper>
  );
}
