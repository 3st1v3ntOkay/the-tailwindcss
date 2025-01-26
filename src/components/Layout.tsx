import { Outlet } from "react-router";
import { Link } from "@radix-ui/themes";

export function Layout() {
  return (
    <>
      <header>
        <Link href="/">home</Link>

        <Link href="/youtube">YouTube</Link>
        <Link href="/tailwindcss">TailwindCSS</Link>
      </header>

      <Outlet />
    </>
  );
}
