interface TData {
  id: number;
  note: string;
  pageUrl: string;
  pageName: string;
  type: string;
}

export const dataNotesRebuild: TData[] = [
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
];

export const dataNotesTools: TData[] = [
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

export const dataNotesDocs: TData[] = [
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
    pageUrl: "https://reactrouter.com/explanation/progressive-enhancement",
    pageName: "react router docs",
    type: "docs",
  },
  {
    id: 5,
    note: "React Router v5 docs",
    pageUrl: "https://v5.reactrouter.com/web/guides/quick-start",
    pageName: "react router docs",
    type: "docs",
  },
  {
    id: 6,
    note: "React Router v7: A Comprehensive Guide & Migration from v6",
    pageUrl: "https://dev.to/utkvishwas/react-router-v7-a-comprehensive-guide-migration-from-v6-7d1",
    pageName: "dev.to",
    type: "docs",
  },
  {
    id: 7,
    note: "How to make your apps ERROR proof with react-router v7",
    pageUrl: "https://youtu.be/qoBNbHjwKIw",
    pageName: "youtube",
    type: "video",
  },
  {
    id: 8,
    note: "React Router V7 just dropped, here's why you should care",
    pageUrl: "https://youtu.be/5B1LScZtrb4",
    pageName: "youtube",
    type: "video",
  },
  {
    id: 9,
    note: "Enrutador React V7",
    pageUrl: "https://youtu.be/h7MTWLv3xvw",
    pageName: "youtube",
    type: "video",
  },
  {
    id: 10,
    note: "React Router 7 Tutorial (framework mode)",
    pageUrl: "https://youtu.be/pw8FAg07kdo",
    pageName: "youtube",
    type: "video",
  },
  {
    id: 11,
    note: "PROYECTO DE ENRUTADOR REACT + Scrimba",
    pageUrl: "https://youtu.be/JMn_yIVl8eo",
    pageName: "youtube",
    type: "video",
  },
  {
    id: 12,
    note: "node:url",
    pageUrl: "https://nodejs.org/api/url.html",
    pageName: "node",
    type: "node docs",
  },
  {
    id: 13,
    note: "@import",
    pageUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/@import",
    pageName: "mdn docs",
    type: "css docs",
  },
  {
    id: 13,
    note: ":host",
    pageUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/:host",
    pageName: "mdn docs",
    type: "css docs",
  },
  {
    id: 14,
    note: "ReactElement",
    pageUrl: "https://www.google.com/search?q=react+reactelement+typescript&sca_esv=837abbad405fc9e3&rlz=1C1GEWG_enMX1139MX1139&sxsrf=AHTn8zoOekhiFvP-3i8ene6I9V0TWXGXQA%3A1740865981431&ei=vYHDZ_HyGenA0PEPrPihiQk&oq=ReactElement&gs_lp=Egxnd3Mtd2l6LXNlcnAiDFJlYWN0RWxlbWVudCoCCAAyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigVIpQ9QAFgAcAF4AZABAJgBAKABAKoBALgBAcgBAJgCAaACC5gDAIgGAZAGCJIHATGgBwA&sclient=gws-wiz-serp",
    pageName: "react research",
    type: "google search",
  },
  {
    id: 15,
    note: "JSXElement constructor",
    pageUrl: "https://www.google.com/search?q=jsxelement+constructor&sca_esv=837abbad405fc9e3&rlz=1C1GEWG_enMX1139MX1139&sxsrf=AHTn8zqB8HH5kH51VWeEk8IwkFz8VvH4Pg%3A1740866053026&ei=BYLDZ-OoAdfF0PEPmMLX4QY&ved=0ahUKEwijv8S17-mLAxXXIjQIHRjhNWwQ4dUDCBA&uact=5&oq=jsxelement+constructor&gs_lp=Egxnd3Mtd2l6LXNlcnAiFmpzeGVsZW1lbnQgY29uc3RydWN0b3IyCRAAGIAEGBMYDTIKEAAYExgFGA0YHjIIEAAYgAQYogQyBRAAGO8FMgUQABjvBUiKCVCsAVisAXABeAGQAQCYAVigAViqAQExuAEDyAEA-AEBmAICoAJkwgIKEAAYsAMY1gQYR5gDAIgGAZAGCJIHATKgB-4D&sclient=gws-wiz-serp",
    pageName: "react research",
    type: "google search",
  },
];
