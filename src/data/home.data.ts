import RandomAvatar from "@asset/estebannn.jpg";

interface TData {
  id: number;
  image: string;
  status: "done" | "working" | "todo";
  pageUrl: string;
  pageName: string;
  pageDescription: string;
}

export const dataDone: TData[] = [];

export const dataTodo: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/youtube",
    pageName: "youtube video player",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores, fugiat iure quia vero dolor similique eveniet illum, expedita quam ad, excepturi quidem laudantium.",
  },
  {
    id: 2,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/youtube-music",
    pageName: "youtube music",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores, fugiat iure quia vero dolor similique eveniet illum, expedita quam ad, excepturi quidem laudantium.",
  },
  {
    id: 3,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/spotify",
    pageName: "spotify",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores, fugiat iure quia vero dolor similique eveniet illum, expedita quam ad, excepturi quidem laudantium.",
  },
  {
    id: 4,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/swatch-hover",
    pageName: "swatch hover",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores, fugiat iure quia vero dolor similique eveniet illum, expedita quam ad, excepturi quidem laudantium.",
  },
];

export const dataWorking: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "working",
    pageUrl: "/working/instagram-story",
    pageName: "instagram story",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores, fugiat iure quia vero dolor similique eveniet illum, expedita quam ad, excepturi quidem laudantium.",
  },
];