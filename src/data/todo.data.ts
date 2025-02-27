import RandomAvatar from "@asset/image-001.jpg";

interface TData {
  id: number;
  image: string;
  status: "done" | "working" | "todo" | "effect" | "demo";
  pageUrl: string;
  pageName: string;
  pageDescription: string;
}

const sampleDescription: string = "Rerum harum consectetur consequuntur labore quod ipsam asperiores";

export const dataTodo: TData[] = [
  {
    id: 2,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/youtube-music",
    pageName: "youtube music",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
  {
    id: 3,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/spotify",
    pageName: "spotify",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
  {
    id: 4,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/swatch-hover",
    pageName: "swatch hover",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
  {
    id: 5,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/wii-channels",
    pageName: "wii channels",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
  {
    id: 6,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/switch-menu",
    pageName: "switch menu",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
];
