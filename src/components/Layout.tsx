import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <header>
        this is the header layout
      </header>

      <Outlet />
    </>
  );
}
