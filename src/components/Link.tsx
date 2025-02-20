import type { ComponentProps, ReactNode } from "react";

export function Link({
  children,
  url,
  ...props
}: {
  children: ReactNode;
  url: string;
} & ComponentProps<"a">) {

  return (
    <a href={url} className="font-geist font-medium text-sm text-blue-600 hover:underline hover:decoration-2 w-fit" {...props}>
      {children}
    </a>
  );
}