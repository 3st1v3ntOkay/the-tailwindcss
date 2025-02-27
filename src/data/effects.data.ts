import RandomAvatar from "@asset/image-001.jpg";

interface TData {
  id: number;
  image: string;
  status: "done" | "working" | "todo" | "effect";
  pageUrl: string;
  pageName: string;
  pageDescription: string;
}

const sampleDescription: string = "Rerum harum consectetur consequuntur labore quod ipsam asperiores";

export const dataEffects: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/ascii-text",
    pageName: "ascii text",
    pageDescription: sampleDescription,
  },
  {
    id: 2,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/aurora",
    pageName: "aurora",
    pageDescription: sampleDescription,
  },
  {
    id: 3,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/decrypted-text",
    pageName: "decrypted text",
    pageDescription: sampleDescription,
  },
  {
    id: 4,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/elastic-slider",
    pageName: "elastic slider",
    pageDescription: sampleDescription,
  },
  {
    id: 5,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/falling-text",
    pageName: "falling text",
    pageDescription: sampleDescription,
  },
  {
    id: 6,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/infinite-menu",
    pageName: "infinite menu",
    pageDescription: sampleDescription,
  },
  {
    id: 7,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/infinite-scroll",
    pageName: "infinite scroll",
    pageDescription: sampleDescription,
  },
  {
    id: 8,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/iridescence",
    pageName: "iridescence",
    pageDescription: sampleDescription,
  },
  {
    id: 9,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/lanyard",
    pageName: "lanyard",
    pageDescription: sampleDescription,
  },
  {
    id: 10,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/letter-glitch",
    pageName: "letter glitch",
    pageDescription: sampleDescription,
  },
  {
    id: 11,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/magnet",
    pageName: "magnet",
    pageDescription: sampleDescription,
  },
  {
    id: 12,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/mansory",
    pageName: "mansory",
    pageDescription: sampleDescription,
  },
  {
    id: 13,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/noise",
    pageName: "noise",
    pageDescription: sampleDescription,
  },
  {
    id: 14,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/scroll-velocity",
    pageName: "scroll velocity",
    pageDescription: sampleDescription,
  },
  {
    id: 15,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/shiny-text",
    pageName: "shiny text",
    pageDescription: sampleDescription,
  },
  {
    id: 16,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/star-border",
    pageName: "star border",
    pageDescription: sampleDescription,
  },
  {
    id: 17,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/stepper",
    pageName: "stepper",
    pageDescription: sampleDescription,
  },
  {
    id: 18,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/text-pressure",
    pageName: "text pressure",
    pageDescription: sampleDescription,
  },
  {
    id: 19,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/sliding-number",
    pageName: "slidering number",
    pageDescription: sampleDescription,
  },
  {
    id: 20,
    image: RandomAvatar,
    status: "effect",
    pageUrl: "/effect/text-shimmer-wave",
    pageName: "text shimmer wave",
    pageDescription: sampleDescription,
  },
];
