import { Link } from "@radix-ui/themes";

import { FlexWrapper } from "@/components/FlexWrapper";
import { Empty } from "@/components/Empty";

import {
  NotesDescription,
  Notes,
  Note,
} from "@/components/Notes";

import {
  dataDone,
  dataTodo,
  dataWorking,
} from "@/data/home.data";

export function Home() {
  const isDataDone: boolean = false;
  const isDataTodo: boolean = true;
  const isDataWorking: boolean = true;

  return (
    <FlexWrapper
      mode="dev"
      color="red"
      direction="column"
      gap="2"
    >
      <div>
        <h1 className="font-geist font-semibold text-xl">
          Demos.
        </h1>

        <p className="font-geist">
          Just any link below to test the demo.
        </p>
      </div>

      <FlexWrapper
        mode="dev"
        color="blue"
        direction="column"
        gap="2"
      >
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

      <FlexWrapper
        mode="dev"
        color="blue"
        direction="column"
        gap="0"
      >
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

      <FlexWrapper
        mode="dev"
        color="blue"
        direction="column"
        gap="0"
      >
        <h2 className="font-geist font-medium text-md text-night">
          In progress.
        </h2>

        {isDataTodo ? dataTodo.map(({
          id,
          name,
          url,
        }) => (
          <Link
            key={id}
            href={url}
            underline="hover"
            className="font-geist"
          >
            {name}
          </Link>
        )) : (
          <Empty />
        )}
      </FlexWrapper>

      <FlexWrapper
        mode="dev"
        color="blue"
        direction="column"
        gap="0"
      >
        <h2 className="font-geist font-medium text-md text-night">
          In progress.
        </h2>

        {isDataWorking ? dataWorking.map(({
          id,
          name,
          url,
        }) => (
          <Link
            key={id}
            href={url}
            underline="hover"
            className="font-geist"
          >
            {name}
          </Link>
        )) : (
          <Empty />
        )}
      </FlexWrapper>
    </FlexWrapper>
  );
}
