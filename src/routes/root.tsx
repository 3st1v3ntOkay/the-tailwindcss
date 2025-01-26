import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { TailwindCSS } from "@/routes/tailwindcss";
import { YouTube } from "@/routes/youtube";
import { Home } from "@/routes/home";

import { Layout } from "@/components/Layout";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/youtube" element={<YouTube />} />
          <Route path="/tailwindcss" element={<TailwindCSS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
