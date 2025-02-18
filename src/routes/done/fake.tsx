import { ChildrenWrapper } from "@/components/FlexWrapper";

export function Fake() {
  const isChildrenBorder: boolean = true;

  return (
    <ChildrenWrapper border={isChildrenBorder}>
      <p className="font-geist">fake done page</p>
    </ChildrenWrapper>
  );
}
