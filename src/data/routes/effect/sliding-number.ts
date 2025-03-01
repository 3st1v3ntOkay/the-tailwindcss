interface TData {
  id: number;
  note: string;
  pageUrl: string;
  pageName: string;
  type: string;
}

export const dataSlidingNumber: TData[] = [
  {
    id: 1,
    note: "useId",
    pageUrl: "https://react.dev/reference/react/useId",
    pageName: "react.dev",
    type: "docs",
  },
  {
    id: 2,
    note: "react-use-measure",
    pageUrl: "https://github.com/pmndrs/react-use-measure",
    pageName: "github",
    type: "docs",
  },
  {
    id: 3,
    note: "motion",
    pageUrl: "https://motion.dev/docs",
    pageName: "motion",
    type: "docs",
  },
  {
    id: 3,
    note: "@property",
    pageUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
    pageName: "mdn docs",
    type: "css docs",
  },
];