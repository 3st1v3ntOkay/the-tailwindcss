import { Outlet } from "react-router";
import { Link } from "@radix-ui/themes";

import { FlexWrapper } from "@/components/FlexWrapper";

export function Layout() {
  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <header>
        <Link href="/">back home</Link>
      </header>

      <Outlet />
    </FlexWrapper>
  );
}
