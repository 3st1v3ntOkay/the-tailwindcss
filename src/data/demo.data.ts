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

export const dataDemo: TData[] = [
  {
    id: 1,
    image: RandomAvatar,
    status: "demo",
    pageUrl: "/demo/url",
    pageName: "name",
    pageDescription: sampleDescription,
  },
];