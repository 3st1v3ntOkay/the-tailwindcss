import { FlexWrapper } from "@component/FlexWrapper";
import { Empty } from "@component/Empty";

import { Link } from "@component/Link";
import { Title } from "@component/Title";
import { Paragraph } from "@component/Paragraph";

import {
  NotesDescription,
  Notes,
  Note,
} from "@component/Notes";

import {
  dataDone,
  dataTodo,
  dataWorking,
} from "@data/home.data";

import {
  CardAvatar,
  Card,
  CardImage,
  CardText,
  IconNumbered,
  Mansory,
  Status,
} from "@component/Card";

import Heart from "@asset/instagram/icons/heart.svg";
import RandomImage from "@asset/parachutes_alt_cover.jpg";
import RandomAvatar from "@asset/estebannn.jpg";

export function Home() {
  const isDataDone: boolean = false;
  const isDataTodo: boolean = true;
  const isDataWorking: boolean = true;

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <div>
        <Title type="h1">
          Demos.
        </Title>

        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum harum consectetur consequuntur labore quod ipsam asperiores, fugiat iure quia vero dolor similique eveniet illum, expedita quam ad, excepturi quidem laudantium.
        </Paragraph>
      </div>

      <FlexWrapper
        mode="dev"
        color="border-blue-500"
        direction="flex-col"
        gap="2"
        padding
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

      <Mansory color="border-red-500" mode="dev">
        <Card color="border-orange-500" mode="prod">
          <FlexWrapper
            mode="dev"
            direction="flex-row"
            gap="justify-between"
            color="border-blue-500"
            padding={false}
          >
            <CardAvatar
              image={RandomAvatar}
              imageAlt="random image"
            />

            <Status>working progress...</Status>
          </FlexWrapper>

          <FlexWrapper
            mode="dev"
            color="border-blue-500"
            direction="flex-col"
            gap="0"
            padding={false}
          >
            <CardText demoName="example 1" demoUrl="#">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis quisquam quasi! Quasi temporibus nemo possimus rerum aperiam deleniti recusandae culpa ratione, explicabo nostrum dolore iste debitis, enim, corrupti non.
            </CardText>

            <CardImage
              image={RandomImage}
              imageSize={600}
              imageAlt="random image"
            />
          </FlexWrapper>

          <FlexWrapper
            mode="dev"
            color="border-blue-500"
            direction="flex-row"
            gap="justify-between"
            padding={false}
          >
            <IconNumbered icon={Heart} iconAlt="heart icon">
              99
            </IconNumbered>
            <IconNumbered icon={Heart} iconAlt="heart icon">
              99
            </IconNumbered>
            <IconNumbered icon={Heart} iconAlt="heart icon">
              99
            </IconNumbered>
          </FlexWrapper>
        </Card>
      </Mansory>

      <FlexWrapper
        mode="dev"
        color="border-blue-500"
        direction="flex-col"
        gap="0"
        padding
      >
        <Title type="h2">
          Done.
        </Title>

        {isDataDone ? dataDone.map(({
          id,
          name,
          url,
        }) => (
          <Link key={id} url={url}>
            {name}
          </Link>
        )) : (
          <Empty />
        )}
      </FlexWrapper>

      <FlexWrapper
        mode="dev"
        color="border-blue-500"
        direction="flex-col"
        gap="0"
        padding
      >
        <Title type="h2">
          In progress.
        </Title>

        {isDataTodo ? dataTodo.map(({
          id,
          name,
          url,
        }) => (
          <Link key={id} url={url}>
            {name}
          </Link>
        )) : (
          <Empty />
        )}
      </FlexWrapper>

      <FlexWrapper
        mode="dev"
        color="border-blue-500"
        direction="flex-col"
        gap="0"
        padding
      >
        <Title type="h2">
          In progress.
        </Title>

        {isDataWorking ? dataWorking.map(({
          id,
          name,
          url,
        }) => (
          <Link key={id} url={url}>
            {name}
          </Link>
        )) : (
          <Empty />
        )}
      </FlexWrapper>
    </FlexWrapper>
  );
}
