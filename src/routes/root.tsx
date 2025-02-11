import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Home } from "@/routes/home";
import { YouTube } from "@/routes/youtube";
import { YouTubeMusic } from "@/routes/youtube-music";
import { Spotify } from "@/routes/spotify";

import { Fake } from "@/routes/fake";

import { Layout } from "@/components/Layout";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="/done" element={<Layout />}>
            <Route path="/done/fake" element={<Fake />} />
          </Route>

          <Route path="/progress" element={<Layout />}>
            <Route path="/progress/youtube" element={<YouTube />} />
            <Route path="/progress/youtube-music" element={<YouTubeMusic />} />
            <Route path="/progress/spotify" element={<Spotify />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
