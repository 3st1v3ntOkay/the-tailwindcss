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
  note,
  pageUrl,
  pageName,
  type,
}: {
  note: string;
  pageUrl: string;
  pageName: string;
  type: string;
}) {
  return (
    <div className="font-geist border-2 border-platinum border-solid p-2 w-fit rounded-[8px] shrink-0 basis-[275px] flex flex-col justify-between">
      <p className="text-sm mb-2">
        {note}
      </p>

      <div className="flex justify-between">
        <Link url={pageUrl} target="_blank">
          {pageName}
        </Link>

        <Status>{type}</Status>
      </div>
    </div>
  );
}
