import { Outlet } from "react-router";

export function Layout() {
  return (
    <>
      <header>
        <Link to="/">home</Link>

        <Link to="/youtube">YouTube</Link>
        <Link to="/tailwindcss">TailwindCSS</Link>
      </header>

      <Outlet />
    </>
  );
}
