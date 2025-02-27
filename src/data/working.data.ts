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

export const dataWorking: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "working",
    pageUrl: "/working/instagram-story",
    pageName: "instagram story",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
  {
    id: 2,
    image: RandomAvatar,
    status: "working",
    pageUrl: "/working/pinterest-page",
    pageName: "pinterest page",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
  {
    id: 3,
    image: RandomAvatar,
    status: "working",
    pageUrl: "/working/youtube",
    pageName: "youtube video player",
    pageDescription: "Rerum harum consectetur consequuntur labore quod ipsam asperiores",
  },
];
