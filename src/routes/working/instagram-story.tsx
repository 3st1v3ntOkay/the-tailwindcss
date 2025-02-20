import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { ElementRef } from "react";

import { Avatar } from "@radix-ui/themes";

import { FlexWrapper } from "@component/FlexWrapper";

import {
  Notes,
  Note,
} from "@/components/Notes";

import Play from "@asset/instagram/icons/play.svg";
import ThreeDots from "@asset/instagram/icons/three-dots.svg";
import Heart from "@asset/instagram/icons/heart.svg";
import Reply from "@asset/instagram/icons/reply.svg";

import Story from "@asset/instagram/stories/png/story-001.png";

export function InstagramStory() {
  // investigar como agregar el elementRef en react 19
  const inputRef = useRef<ElementRef<"input">>(null);

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
          <Note
            title={`<input type=" file">`}
            linkName="mdn docs"
            linkUrl="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file"
          />
        </Notes>
      </FlexWrapper>

      <div>
        <label htmlFor="avatar">Choose a profile picture:</label>

        <input ref={inputRef} className="border-2 border-blue-400" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
      </div>

      <div className={`flex items-center justify-center bg-night py-4 relative backdrop-blur-2xl`}>
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
                <Avatar
                  className="bg-white"
                  fallback="e"
                  radius="full"
                  size="2"
                />

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
                  iconSize={16}
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
              placeholder="Reply to estebann ..."
            />

            <div className="flex gap-3 items-center">
              <Icon
                icon={Heart}
                iconSize={16}
                iconAlt="heart icon"
              />

              <Icon
                icon={Reply}
                iconSize={16}
                iconAlt="reply icon"
              />
            </div>
          </Center>
        </TopBottomSection>
      </div>
    </FlexWrapper>
  );
}

function Icon({
  icon,
  iconSize = 16,
  iconAlt,
}: {
  icon: string;
  iconSize: number;
  iconAlt: string;
}) {
  return (
    <img
      className="cursor-pointer"
      src={icon}
      width={iconSize}
      height={iconSize}
      alt={iconAlt}
    />
  );
}

function StoryBar({
  hasWatched = false,
}: {
  hasWatched: boolean;
}) {
  const localStyles: string = "w-full h-0.5 bg-white rounded-[4px]";

  return (
    <>
      {hasWatched ? (
        <div className={`${localStyles}`}></div>
      ) : (
        <div className={`${localStyles} opacity-50`}></div>
      )}
    </>
  );
}

function Center({
  children,
  direction = "y",
  mode = "dev",
}: {
  children: ReactNode;
  direction: "x" | "y";
  mode: "dev" | "prod";
}) {
  const axis: string = direction === "x" ? "row" : "col";
  const whichMode: string = mode === "dev" ? "border-2 border-green-400 border-dashed" : "";

  return (
    <div className={`w-[464px] h-fit px-6 flex items-center flex-${axis} gap-4 ${whichMode}`}>
      {children}
    </div>
  );
}

function TopBottomSection({
  children,
  mode = "dev",
  position,
}: {
  children: ReactNode;
  mode: "dev" | "prod";
  position: "top" | "bottom";
}) {
  const whichMode: string = mode === "dev" ? "border-2 border-purple-400 border-dashed" : "";

  return (
    <>
      {position === "top" ? (
        <div className={`absolute top-8 left-0 w-full flex items-center justify-center ${whichMode}`}>
          {children}
        </div>
      ) : (
        <div className={`absolute bottom-8 left-0 w-full flex items-center justify-center ${whichMode}`}>
          {children}
        </div>
      )}
    </>

  );
}
