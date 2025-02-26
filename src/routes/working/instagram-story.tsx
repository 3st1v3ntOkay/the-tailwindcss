import { useEffect, useRef } from "react";
import type { ElementRef } from "react";

import { FlexWrapper } from "@component/FlexWrapper";

import {
  Notes,
  Note,
} from "@component/Notes";

import { TopBottomSection } from "@component/ui/instagram/TopBottomSection";
import { Center } from "@component/ui/instagram/Center";
import { StoryBar } from "@component/ui/instagram/StoryBar";
import { Avatar } from "@component/ui/instagram/Avatar";
import { Icon } from "@component/ui/instagram/Icon";

import AvatarPhoto from "@asset/image-002.jpg";

import Play from "@asset/instagram/icons/play-alt.svg";
import ThreeDots from "@asset/instagram/icons/three-dots-alt.svg";
import Heart from "@asset/instagram/icons/heart-alt.svg";
import Reply from "@asset/instagram/icons/reply-alt.svg";

import Story from "@asset/instagram/stories/story-005.png";

interface LocalData {
  id: number;
  note: string;
  pageName: string;
  pageUrl: string;
  type: string;
}

const localData: LocalData[] = [
  {
    id: 3,
    note: "tailwindcss quick access",
    pageName: "tailwindcss",
    pageUrl: "https://tailwindcss.com/",
    type: "docs",
  },
  {
    id: 1,
    note: "input type file",
    pageName: "mdn web docs",
    pageUrl: "https://prodeloper.mozilla.org/en-US/docs/Web/HTML/Element/input/file",
    type: "docs",
  },
  {
    id: 2,
    note: "Using files from web applications",
    pageName: "mdn web docs",
    pageUrl: "https://prodeloper.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#getting_information_about_selected_files",
    type: "docs",
  },
];

export function InstagramStoryPage() {
  // investigar como agregar el elementRef en react 19
  const inputRef = useRef<ElementRef<"input">>(null);
  console.log("inputRef value");
  console.log(inputRef);

  return (
    <FlexWrapper
      mode="prod"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
      <FlexWrapper
        mode="prod"
        color="border-blue-500"
        direction="flex-col"
        gap="2"
        padding
      >
        <Notes>
          {localData.map(({
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

      <div className="flex flex-col gap-2 mb-2">
        <label>
          Select some page to visualize your story:

        </label>
        <input
          ref={inputRef}
          className="w-fit py-1 px-2 bg-white border-1 border-solid border-platinum rounded-[10px] cursor-pointer"
          type="file"
          accept="image/png, image/jpeg"
        />
      </div>

      <div
        style={{
          background: "black",
          backgroundImage: `url(${Story})`,
          backgroundPosition: "center",
          backdropFilter: "blur(10px)",
        }}
        className={`flex items-center justify-center relative rounded-[10px]`}
      >
        <div className="w-full h-full bg-white/10 backdrop-blur-3xl flex items-center justify-center py-4">
          <MainContent />
        </div>
      </div>
    </FlexWrapper>
  );
}


function MainContent() {
  return (
    <div className="relative py-4">
      <TopBottomSection mode="prod" position="top">
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
      </TopBottomSection>

      <img
        className="aspect-instagram-story w-116 rounded-lg"
        src={Story}
        alt="random story"
      />

      <TopBottomSection mode="prod" position="bottom">
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
      </TopBottomSection>
    </div>
  );
}