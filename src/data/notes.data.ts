interface TData {
  id: number;
  note: string;
  pageUrl: string;
  pageName: string;
  type: string;
}

export const dataNotes: TData[] = [
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
  {
    id: 6,
    note: "Zustand",
    pageUrl: "https://zustand.docs.pmnd.rs/getting-started/introduction",
    pageName: "zustand docs",
    type: "docs",
  },
  {
    id: 7,
    note: "Zod",
    pageUrl: "https://zod.dev/",
    pageName: "zod docs",
    type: "docs",
  },
  {
    id: 8,
    note: "Legend State",
    pageUrl: "https://legendapp.com/open-source/state/v3/",
    pageName: "legend state docs",
    type: "docs",
  },
  {
    id: 9,
    note: "Tanstack Store",
    pageUrl: "https://tanstack.com/store/latest",
    pageName: "tanstack store docs",
    type: "docs",
  },
  {
    id: 10,
    note: "Jotai",
    pageUrl: "https://jotai.org/",
    pageName: "jotai docs",
    type: "docs",
  },
];
