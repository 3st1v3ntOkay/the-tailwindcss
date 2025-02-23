import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Layout } from "@component/Layout";

/* default page */
import { Home } from "@route/home";

/* done */
import { AsciiText } from "@route/done/ascii-text";

/* working */
import { InstagramStory } from "@route/working/instagram-story";

/* todo */
import { YouTube } from "@/routes/working/youtube";
import { YouTubeMusic } from "@route/todo/youtube-music";
import { Spotify } from "@route/todo/spotify";
import { SwatchHover } from "@route/todo/swatch-hover";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="/done" element={<Layout />}>
            <Route path="/done/ascii-text" element={<AsciiText />} />
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
