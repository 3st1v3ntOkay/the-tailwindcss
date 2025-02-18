import { Link } from "@radix-ui/themes";

import type { ReactNode } from "react";

export function NotesDescription({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="font-geist">{children}</p>
  );
}

export function Notes({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 overflow-x-scroll">
      {children}
    </div>
  );
}

export function Note({
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
      <h3 className="font-medium text-md">
        {title}
      </h3>

      <Link href={linkUrl} target="_blank">
        {linkName}
      </Link>
    </div>
  );
}
