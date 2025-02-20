import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Layout } from "@component/Layout";
import { Empty } from "@component/Empty";

import { Home } from "@route/home";

/* todo ... */
import { YouTube } from "@route/todo/youtube";
import { YouTubeMusic } from "@route/todo/youtube-music";
import { Spotify } from "@route/todo/spotify";
import { SwatchHover } from "@route/todo/swatch-hover";

/* working ... */
import { InstagramStory } from "@route/working/instagram-story";

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
