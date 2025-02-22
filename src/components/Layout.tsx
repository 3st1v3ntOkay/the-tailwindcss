import { Outlet, useLocation } from "react-router";

import { FlexWrapper } from "@/components/FlexWrapper";
import { Link } from "./Link";
import { Status } from "./Card";

export function Layout() {
  const { pathname } = useLocation();
  const altPath = window.location.href;

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <header className="font-geist flex gap-4 items-center">
        <Status><Link url="/">back home</Link></Status>
        <p className="text-sm text-dim-gray bg-gray-100 font-medium rounded-lg px-3 py-0.5 w-fit h-fit">{pathname}</p>
      </header>

      <Outlet />
    </FlexWrapper>
  );
}
