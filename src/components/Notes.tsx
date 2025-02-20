import { Status } from "./Card";
import { Link } from "./Link";

import type { ReactNode } from "react";

export function Notes({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-thin">
      {children}
    </div>
  );
}

export function Note({
  title,
  linkUrl,
  linkName,
  status,
}: {
  title: string;
  linkUrl: string;
  linkName: string;
  status: string;
}) {
  return (
    <div className="font-geist border-2 border-platinum border-solid p-2 w-fit rounded-[8px] shrink-0 basis-[275px]">
      <p className="text-sm mb-2">
        {title}
      </p>

      <div className="flex justify-between">
        <Link url={linkUrl} target="_blank">
          {linkName}
        </Link>

        <Status>{status}</Status>
      </div>
    </div>
  );
}
