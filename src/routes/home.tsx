import {
  Link,
} from "@radix-ui/themes";

import { ChildrenWrapper } from "@/components/ChildrenWrapper";
import { ParentWrapper } from "@/components/ParentWrapper";
import { Empty } from "@/components/Empty";

import { dataDone, dataProgress } from "@/data/home.data";

export function Home() {
  const isDataDone: boolean = true;
  const isDataProgress: boolean = true;

  const isParentBorder: boolean = true;
  const isChidrenBorder: boolean = true;

  return (
    <ParentWrapper border={isParentBorder}>
      <div>
        <h1 className="font-geist font-medium text-xl text-night">
          Demos.
        </h1>

        <p className="font-geist font-light text-night">
          Just any link below to test the demo.
        </p>
      </div>

      <ChildrenWrapper border={isChidrenBorder}>
        <h2 className="font-geist font-medium text-md text-night">
          Done.
        </h2>

        {isDataDone ? dataDone.map(({
          id,
          name,
          url,
        }) => (
          <Link
            key={id}
            href={url}
            underline="hover"
            className="font-geist text-purple-600"
          >
            {name}
          </Link>
        )) : (
          <Empty />
        )}
      </ChildrenWrapper>

      <ChildrenWrapper border={isChidrenBorder}>
        <h2 className="font-geist font-medium text-md text-night">
          In progress.
        </h2>

        {isDataProgress ? dataProgress.map(({
          id,
          name,
          url,
        }) => (
          <Link key={id} href={url} underline="hover" className="font-geist">
            {name}
          </Link>
        )) : (
          <Empty />
        )}
      </ChildrenWrapper>
    </ParentWrapper>
  );
}
