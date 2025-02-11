import { ChildrenWrapper } from "@/components/ChildrenWrapper";

export function Spotify() {
  const isChildrenBorder: boolean = true;

  return (
    <ChildrenWrapper border={isChildrenBorder}>
      <p className="font-geist">spotify page</p>
    </ChildrenWrapper>
  );
}
