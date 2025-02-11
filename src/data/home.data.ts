interface TData {
  id: number;
  name: string;
  url: string;
}

export const dataDone: TData[] = [
  {
    id: 1,
    name: "fake page",
    url: "/done/fake",
  },
];

export const dataProgress: TData[] = [
  {
    id: 1,
    name: "youtube video player",
    url: "/progress/youtube",
  },
  {
    id: 2,
    name: "youtube music",
    url: "/progress/youtube-music",
  },
  {
    id: 3,
    name: "spotify",
    url: "/progress/spotify",
  },
];