import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Home } from "./home";

import { Layout } from "@/components/Layout";
import { Empty } from "@/components/Empty";

import { YouTube } from "./todo/youtube";
import { YouTubeMusic } from "./todo/youtube-music";
import { Spotify } from "./todo/spotify";
import { InstagramStory } from "./working/instagram-story";
import { SwatchHover } from "./todo/swatch-hover";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="/done" element={<Layout />}>
            <Route path="/done/fake" element={<Empty />} />
          </Route>

          <Route path="/todo" element={<Layout />}>
            <Route path="/todo/youtube" element={<YouTube />} />
            <Route path="/todo/youtube-music" element={<YouTubeMusic />} />
            <Route path="/todo/spotify" element={<Spotify />} />
            <Route path="/todo/swatch-hover" element={<SwatchHover />} />
          </Route>

          <Route path="/working" element={<Layout />}>
            <Route path="/working/instagram-story" element={<InstagramStory />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
