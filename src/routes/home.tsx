import { FlexWrapper } from "@component/FlexWrapper";
import { Empty } from "@component/Empty";

import { Title } from "@component/Title";
import { Paragraph } from "@component/Paragraph";

import {
  Notes,
  Note,
} from "@component/Notes";

import {
  dataDemo,
  dataEffects,
  dataNotes,
  dataTodo,
  dataWorking,
} from "@data/home.data";

import {
  CardAvatar,
  Card,
  CardText,
  Mansory,
  Status,
} from "@component/Card";

export function Home() {
  const isDataNotes: boolean = true;

  const isDataDemo: boolean = false;
  const isDataTodo: boolean = true;
  const isDataWorking: boolean = true;
  const isDataEffects: boolean = true;

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
          the-tailwindcss
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
        padding={false}
      >
        <Notes>
          {isDataNotes ? dataNotes.map(({
            id,
            note,
            pageUrl,
            pageName,
            type,
          }) => (
            <Note
              key={id}
              note={note}
              pageUrl={pageUrl}
              pageName={pageName}
              type={type}
            />
          )) : (
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <Empty />

              <Status>unavailable</Status>
            </FlexWrapper>
          )}
        </Notes>
      </FlexWrapper>

      <div className="mb-4"></div>

      <Title type="h2">Demos.</Title>

      <Mansory color="border-blue-500" mode="dev">
        {isDataDemo ? dataDemo.map(({
          id,
          image,
          status,
          pageUrl,
          pageName,
          pageDescription,
        }) => (
          <Card key={id} color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <CardAvatar
                image={image}
                imageAlt="random image"
              />

              <Status>{status}</Status>
            </FlexWrapper>

            <FlexWrapper
              mode="prod"
              color="border-blue-500"
              direction="flex-col"
              gap="0"
              padding={false}
            >
              <CardText demoName={pageName} demoUrl={pageUrl}>
                {pageDescription}
              </CardText>
            </FlexWrapper>
          </Card>
        )) : (
          <Card color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <Empty />

              <Status>unavailable</Status>
            </FlexWrapper>
          </Card>
        )}
      </Mansory>

      <div className="mb-4"></div>

      <Title type="h2">Working.</Title>

      <Mansory color="border-blue-500" mode="dev">
        {isDataWorking ? dataWorking.map(({
          id,
          image,
          status,
          pageUrl,
          pageName,
          pageDescription,
        }) => (
          <Card key={id} color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <CardAvatar
                image={image}
                imageAlt="random image"
              />

              <Status>{status}</Status>
            </FlexWrapper>

            <FlexWrapper
              mode="prod"
              color="border-blue-500"
              direction="flex-col"
              gap="0"
              padding={false}
            >
              <CardText demoName={pageName} demoUrl={pageUrl}>
                {pageDescription}
              </CardText>
            </FlexWrapper>
          </Card>
        )) : (
          <Card color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <Empty />

              <Status>unavailable</Status>
            </FlexWrapper>
          </Card>
        )}
      </Mansory>

      <div className="mb-4"></div>

      <Title type="h2">Effects.</Title>

      <Mansory color="border-blue-500" mode="dev">
        {isDataEffects ? dataEffects.map(({
          id,
          image,
          status,
          pageUrl,
          pageName,
          pageDescription,
        }) => (
          <Card key={id} color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <CardAvatar
                image={image}
                imageAlt="random image"
              />

              <Status>{status}</Status>
            </FlexWrapper>

            <FlexWrapper
              mode="prod"
              color="border-blue-500"
              direction="flex-col"
              gap="0"
              padding={false}
            >
              <CardText demoName={pageName} demoUrl={pageUrl}>
                {pageDescription}
              </CardText>
            </FlexWrapper>
          </Card>
        )) : (
          <Card color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <Empty />

              <Status>unavailable</Status>
            </FlexWrapper>
          </Card>
        )}
      </Mansory>

      <div className="mb-4"></div>

      <Title type="h2">In progress.</Title>

      <Mansory color="border-blue-500" mode="dev">
        {isDataTodo ? dataTodo.map(({
          id,
          image,
          status,
          pageUrl,
          pageName,
          pageDescription,
        }) => (
          <Card key={id} color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <CardAvatar
                image={image}
                imageAlt="random image"
              />

              <Status>{status}</Status>
            </FlexWrapper>

            <FlexWrapper
              mode="prod"
              color="border-blue-500"
              direction="flex-col"
              gap="0"
              padding={false}
            >
              <CardText demoName={pageName} demoUrl={pageUrl}>
                {pageDescription}
              </CardText>
            </FlexWrapper>
          </Card>
        )) : (
          <Card color="border-orange-500" mode="prod">
            <FlexWrapper
              mode="prod"
              direction="flex-row"
              gap="justify-between"
              color="border-blue-500"
              padding={false}
            >
              <Empty />

              <Status>unavailable</Status>
            </FlexWrapper>
          </Card>
        )}
      </Mansory>
    </FlexWrapper>
  );
}
