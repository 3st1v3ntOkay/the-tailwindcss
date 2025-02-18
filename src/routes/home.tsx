import { Link } from "@radix-ui/themes";

import { FlexWrapper } from "@/components/FlexWrapper";
import { Empty } from "@/components/Empty";

import {
  NotesDescription,
  Notes,
  Note,
} from "@/components/Notes";

import { dataDone, dataProgress } from "@/data/home.data";

export function Home() {
  const isDataDone: boolean = true;
  const isDataProgress: boolean = true;

  return (
    <FlexWrapper mode="dev" color="green">
      <div>
        <h1 className="font-geist font-medium text-xl text-night">
          Demos.
        </h1>

        <p className="font-geist font-light text-night">
          Just any link below to test the demo.
        </p>
      </div>

      <FlexWrapper mode="dev" color="blue">
        <NotesDescription>
          note description
        </NotesDescription>

        <Notes>
          <Note
            title="Idea 1: revisar pagina de Nextjs Config 24"
            linkName="Nextjs Config 24"
            linkUrl="https://nextjs.org/conf"
          />

          <Note
            title="Idea 2: revisar pagina de Zed IDE"
            linkName="Zed IDE"
            linkUrl="https://zed.dev/"
          />
        </Notes>
      </FlexWrapper>

      <FlexWrapper mode="dev" color="blue">
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
      </FlexWrapper>

      <FlexWrapper mode="dev" color="blue">
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
      </FlexWrapper>
    </FlexWrapper>
  );
}
