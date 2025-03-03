import { useState } from "react";
import type { ChangeEvent } from "react";

import { FlexWrapper } from "@component/FlexWrapper";

import {
  Notes,
  Note,
} from "@component/Notes";

import { Section } from "@/components/ui/instagram/Section";
import { Center } from "@/components/ui/instagram/Center";
import { StoryBar } from "@/components/ui/instagram/StoryBar";
import { Avatar } from "@/components/ui/instagram/Avatar";
import { Icon } from "@/components/ui/instagram/Icon";
import { ImageInformation } from "@component/ui/instagram/ImageInformation";
import { ImageSelector } from "@component/ui/instagram/ImageSelector";
import { Background } from "@component/ui/instagram/Background";
import { YourStory } from "@component/ui/instagram/YourStory";

import { dataInstagramStory } from "@data/routes/working/instagram-story.data";

import { setCreditsTo } from "@route/utils/setCreditsTo";
import { currentStory } from "@component/ui/instagram/utils/currentStory";

import AvatarPhoto from "@asset/image-002.jpg";

import Play from "@asset/instagram/icons/play-alt.svg";
import ThreeDots from "@asset/instagram/icons/three-dots-alt.svg";
import Heart from "@asset/instagram/icons/heart-alt.svg";
import Reply from "@asset/instagram/icons/reply-alt.svg";

type TypeFile = string | null;

export function InstagramStoryPage() {
  setCreditsTo("me", "https://github.com/3st1v3ntOkay/the-tailwindcss");

  const [file, setFile] = useState<TypeFile>(null);
  const [fileData, setFileData] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0].name);
      setFileData(e.target.files[0]);
    }
  }

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <FlexWrapper
        mode="dev"
        color="border-blue-500"
        direction="flex-col"
        gap="2"
        padding
      >
        <Notes>
          {dataInstagramStory.map(({
            id,
            note,
            pageName,
            pageUrl,
            type,
          }) => (
            <Note
              key={id}
              note={note}
              pageName={pageName}
              pageUrl={pageUrl}
              type={type}
            />
          ))}
        </Notes>
      </FlexWrapper>

      <ImageSelector handleFileChange={handleFileChange} />

      <ImageInformation file={fileData} />

      <Background file={file}>
        <div className="relative py-4">
          <Section mode="prod" position="top">
            <Center direction="y" mode="prod">
              <div className="flex w-full gap-1">
                <StoryBar hasWatched={true} />
                <StoryBar hasWatched={false} />
                <StoryBar hasWatched={false} />
                <StoryBar hasWatched={false} />
                <StoryBar hasWatched={false} />
              </div>

              <div className="w-full flex justify-between">
                <div className="flex gap-2 items-center">
                  <Avatar photo={AvatarPhoto} />

                  <p className="text-white">estebannn</p>
                  <span className="text-platinum">5 min</span>
                </div>

                <div className="flex gap-3 items-center">
                  <Icon
                    icon={Play}
                    iconSize={16}
                    iconAlt="play icon"
                  />

                  <Icon
                    icon={ThreeDots}
                    iconSize={24}
                    iconAlt="three dots icon"
                  />
                </div>
              </div>
            </Center>
          </Section>

          <YourStory file={currentStory(file)} />

          <Section mode="prod" position="bottom">
            <Center direction="x" mode="prod">
              <input
                className="border-2 border-white border-solid py-2 px-4 outline-none rounded-full caret-white placeholder:text-white text-white w-full"
                type="text"
                placeholder="Reply to estebann..."
              />

              <div className="flex gap-4 items-center">
                <Icon
                  icon={Heart}
                  iconSize={32}
                  iconAlt="heart icon"
                />

                <Icon
                  icon={Reply}
                  iconSize={32}
                  iconAlt="reply icon"
                />
              </div>
            </Center>
          </Section>
        </div>
      </Background>
    </FlexWrapper>
  );
}
