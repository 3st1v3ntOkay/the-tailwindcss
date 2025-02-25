import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Layout } from "@component/Layout";

/* default page */
import { Home } from "@route/home";

/* done */
import { ASCIITextPage } from "@route/done/ascii-text";
import { ShinyTextPage } from "@route/done/shiny-text";
import { TextPressurePage } from "@route/done/text-pressure";
import { FallingTextPage } from "@route/done/falling-text";

/* working */
import { InstagramStoryPage } from "@route/working/instagram-story";
import { PinterestPage } from "@route/working/pinterest-page";
import { YouTubePage } from "@/routes/working/youtube";

/* todo */
import { YouTubeMusicPage } from "@route/todo/youtube-music";
import { SpotifyPage } from "@route/todo/spotify";
import { SwatchHoverPage } from "@route/todo/swatch-hover";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="/done" element={<Layout />}>
            <Route path="/done/ascii-text" element={<ASCIITextPage />} />
            <Route path="/done/shiny-text" element={<ShinyTextPage />} />
            <Route path="/done/text-pressure" element={<TextPressurePage />} />
            <Route path="/done/falling-text" element={<FallingTextPage />} />
          </Route>

          <Route path="/todo" element={<Layout />}>
            <Route path="/todo/youtube-music" element={<YouTubeMusicPage />} />
            <Route path="/todo/spotify" element={<SpotifyPage />} />
            <Route path="/todo/swatch-hover" element={<SwatchHoverPage />} />
          </Route>

          <Route path="/working" element={<Layout />}>
            <Route path="/working/instagram-story" element={<InstagramStoryPage />} />
            <Route path="/working/pinterest-page" element={<PinterestPage />} />
            <Route path="/working/youtube" element={<YouTubePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
