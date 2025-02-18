interface TData {
  id: number;
  name: string;
  url: string;
}

export const dataDone: TData[] = [];

export const dataTodo: TData[] = [
  {
    id: 1,
    name: "youtube video player",
    url: "/todo/youtube",
  },
  {
    id: 2,
    name: "youtube music",
    url: "/todo/youtube-music",
  },
  {
    id: 3,
    name: "spotify",
    url: "/todo/spotify",
  },
  {
    id: 4,
    name: "swatch hover",
    url: "/todo/swatch-hover",
  },
];

export const dataWorking: TData[] = [
  {
    id: 1,
    name: "instagram story",
    url: "/working/instagram-story",
  },
];