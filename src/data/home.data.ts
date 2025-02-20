import RandomAvatar from "@asset/estebannn.jpg";

interface TData {
  id: number;
  image: string;
  status: "done" | "working" | "todo";
  pageUrl: string;
  pageName: string;
  pageDescription: string;
}

export const dataDone: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "done",
    pageUrl: "/done/ascii-text",
    pageName: "ascii text",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
];

export const dataTodo: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "todo",
    pageUrl: "/todo/youtube",
    pageName: "youtube video player",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
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
];

export const dataWorking: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "working",
    pageUrl: "/working/instagram-story",
    pageName: "instagram story",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
];

export const dataNotes = [
  {
    id: 1,
    note: "Try to reply this website",
    pageUrl: "https://nextjs.org/conf",
    pageName: "Nextjs Config 24",
    type: "website",
  },
  {
    id: 2,
    note: "Try to reply this website",
    pageUrl: "https://zed.dev/",
    pageName: "Zed IDE",
    type: "website",
  },
  {
    id: 3,
    note: "Investigar window.location.href",
    pageUrl: "https://developer.mozilla.org/en-US/docs/Web/API/Location/href",
    pageName: "mdn web docs",
    type: "docs",
  },
  {
    id: 4,
    note: "React Router v6 docs",
    pageUrl: "https://reactrouter.com/start/framework/routing#routing",
    pageName: "mdn web docs",
    type: "docs",
  },
  {
    id: 5,
    note: "React Router v5 docs",
    pageUrl: "https://v5.reactrouter.com/web/guides/quick-start",
    pageName: "mdn web docs",
    type: "docs",
  },
];