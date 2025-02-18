import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Home } from "./home";

import { Fake } from "./done/fake";

import { YouTube } from "./progress/youtube";
import { YouTubeMusic } from "./progress/youtube-music";
import { Spotify } from "./progress/spotify";
import { InstagramStory } from "./progress/instagram-story";
import { SwatchHover } from "./progress/swatch-hover";

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
            <Route path="/progress/instagram-story" element={<InstagramStory />} />
            <Route path="/progress/swatch-hover" element={<SwatchHover />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
