import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { Layout } from "@component/Layout";

/* default page */
import { Home } from "@route/home";

/* done */
import { ASCIITextPage } from "@/routes/effect/ascii-text";
import { ShinyTextPage } from "@/routes/effect/shiny-text";
import { TextPressurePage } from "@/routes/effect/text-pressure";
import { FallingTextPage } from "@/routes/effect/falling-text";

/* working */
import { InstagramStoryPage } from "@route/working/instagram-story";
import { PinterestPage } from "@route/working/pinterest-page";
import { YouTubePage } from "@/routes/working/youtube";

/* todo */
import { YouTubeMusicPage } from "@route/todo/youtube-music";
import { SpotifyPage } from "@route/todo/spotify";
import { SwatchHoverPage } from "@route/todo/swatch-hover";
import { WiiChannelsPage } from "@route/todo/wii-channel";
import { SwitchMenuPage } from "@route/todo/switch-menu";

/* effect */
import { AuroraPage } from "@route/effect/aurora";
import { DecryptedTextPage } from "@route/effect/decrypted-text";
import { ElasticSliderPage } from "@route/effect/elastic-slider";
import { InfiniteMenuPage } from "@route/effect/infinite-menu";
import { InfiniteScrollPage } from "@route/effect/infinite-scroll";
import { IridescencePage } from "@route/effect/iridescence";
import { LanyardPage } from "@route/effect/lanyard";
import { LetterGlitchPage } from "@route/effect/letter-glitch";
import { MansoryPage } from "@route/effect/mansory";
import { MagnetPage } from "@route/effect/magnet";
import { NoisePage } from "@route/effect/noise";
import { ScrollVelocityPage } from "@route/effect/scroll-velocity";
import { StarBorderPage } from "@route/effect/star-border";
import { StepperPage } from "@route/effect/stepper";

import { SlidingNumberPage } from "@route/effect/sliding-number";
import { TextShimmerWavePage } from "@route/effect/text-shimmer-wave";

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />

          <Route path="/demo" element={<Layout />}>
            {/* <Route path="/demo/ascii-text" element={<ASCIITextPage />} /> */}
          </Route>

          <Route path="/effect" element={<Layout />}>
            <Route path="/effect/ascii-text" element={<ASCIITextPage />} />
            <Route path="/effect/aurora" element={<AuroraPage />} />
            <Route path="/effect/decrypted-text" element={<DecryptedTextPage />} />
            <Route path="/effect/elastic-slider" element={<ElasticSliderPage />} />
            <Route path="/effect/falling-text" element={<FallingTextPage />} />
            <Route path="/effect/infinite-menu" element={<InfiniteMenuPage />} />
            <Route path="/effect/infinite-scroll" element={<InfiniteScrollPage />} />
            <Route path="/effect/iridescence" element={<IridescencePage />} />
            {/* <Route path="/effect/lanyard" element={<LanyardPage />} /> */}
            <Route path="/effect/letter-glitch" element={<LetterGlitchPage />} />
            <Route path="/effect/magnet" element={<MagnetPage />} />
            <Route path="/effect/mansory" element={<MansoryPage />} />
            <Route path="/effect/noise" element={<NoisePage />} />
            <Route path="/effect/scroll-velocity" element={<ScrollVelocityPage />} />
            <Route path="/effect/shiny-text" element={<ShinyTextPage />} />
            <Route path="/effect/star-border" element={<StarBorderPage />} />
            <Route path="/effect/stepper" element={<StepperPage />} />
            <Route path="/effect/text-pressure" element={<TextPressurePage />} />

            <Route path="/effect/sliding-number" element={<SlidingNumberPage />} />
            <Route path="/effect/text-shimmer-wave" element={<TextShimmerWavePage />} />
          </Route>

          <Route path="/todo" element={<Layout />}>
            <Route path="/todo/youtube-music" element={<YouTubeMusicPage />} />
            <Route path="/todo/spotify" element={<SpotifyPage />} />
            <Route path="/todo/swatch-hover" element={<SwatchHoverPage />} />
            <Route path="/todo/wii-channels" element={<WiiChannelsPage />} />
            <Route path="/todo/switch-menu" element={<SwitchMenuPage />} />
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
