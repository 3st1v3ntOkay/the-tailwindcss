import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

import { FlexWrapper } from "@/components/FlexWrapper";
import { Link } from "@component/Link";
import { Status } from "@component/Card";
import { Title } from "@component/Title";

export function Layout() {
  const { pathname } = useLocation();
  // const altPath = window.location.href;

  const [author, setAuthor] = useState<string>("home"); // anonymous or home
  const [url, setUrl] = useState<string>("/"); // pathname or /

  useEffect(() => {
    /* todo: ver que tan bueno es usar el ! en vez de  ?? */
    setAuthor(window.localStorage.getItem("author")!);
    setUrl(window.localStorage.getItem("url")!);
  }, []);

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <header className="font-geist">
        <Title type="h1" customStyles="mb-3">
          the-tailwindcss-wreact-router
        </Title>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <Status><Link url="/">back home</Link></Status>
            <p className="text-sm text-dim-gray bg-gray-100 font-medium rounded-lg px-3 py-0.5 w-fit h-fit">{pathname}</p>
          </div>

          <Status>
            credits and created by <Link url={url} target="_blank">{author}</Link>
          </Status>
        </div>
      </header>

      <Outlet />
    </FlexWrapper>
  );
}
