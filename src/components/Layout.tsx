import { Outlet } from "react-router";
import { Link } from "@radix-ui/themes";

import { ParentWrapper } from "@/components/ParentWrapper";

export function Layout() {
  const isParentBorder: boolean = true;

  return (
    <ParentWrapper border={isParentBorder}>
      <header>
        <Link href="/">back home</Link>
      </header>

      <Outlet />
    </ParentWrapper>
  );
}
