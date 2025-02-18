import { Link } from "@radix-ui/themes";
import { ChildrenWrapper } from "./ChildrenWrapper";

import type { ReactNode } from "react";

export function AboutDemo({
  children,
}: {
  children: ReactNode;
}) {
  const isChildrenBorder: boolean = true;

  return (
    <ChildrenWrapper border={isChildrenBorder}>
      <p className="font-geist">some information about this demo</p>

      <div className="flex gap-4 overflow-x-scroll">
        {children}
      </div>
    </ChildrenWrapper>
  );
}

export function InfoContainer({
  title,
  linkUrl,
  linkName,
}: {
  title: string;
  linkUrl: string;
  linkName: string;
}) {
  return (
    <div className="border-2 border-platinum border-solid p-2 w-fit rounded-[8px] shrink-0">
      <h3 className="font-medium text-md">{title}</h3>
      <Link href={linkUrl}>{linkName}</Link>
    </div>
  );
}
