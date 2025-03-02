import { useEffect, useRef, useState } from "react";
import type { ChangeEvent, Dispatch, ElementRef, ReactNode, Ref, SetStateAction } from "react";

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

import { dataInstagramStory } from "@data/routes/working/instagram-story.data";

import AvatarPhoto from "@asset/image-002.jpg";

import Play from "@asset/instagram/icons/play-alt.svg";
import ThreeDots from "@asset/instagram/icons/three-dots-alt.svg";
import Heart from "@asset/instagram/icons/heart-alt.svg";
import Reply from "@asset/instagram/icons/reply-alt.svg";

import Story from "@asset/instagram/stories/story-005.png";
import { Empty } from "@/components/Empty";

type TypeFile = string | null;

export function InstagramStoryPage() {
  /* investigar como agregar el elementRef en react 19:

    const inputRef = useRef<HTMLInputElement>(null);

    console.log("inputRef value");
    console.log(inputRef);
  */

  const [file, setFile] = useState<TypeFile>(null);
  const [fileFull, setFileFull] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0].name);
      setFile(e.target.files[0].name);
      setFileFull(e.target.files[0]);
    }

    console.log(file);
    console.log(fileFull);
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

      <ImageSelector
        file={file}
        setFile={setFile}
        handleFileChange={handleFileChange}
      />

      <ImageInfo
        file={fileFull}
      />

      <Background file={file}>
        <MainContent
          file={file}
          setFile={setFile}
          handleFileChange={handleFileChange}
        />
      </Background>
    </FlexWrapper>
  );
}

function ImageInfo({
  file,
}: {
  file: File | null;
}) {
  const defaultData: string = "no data available";

  return (
    <div className="font-geist w-full py-1 px-2 bg-white border-1 border-solid border-platinum rounded-[10px]">
      {/* {file !== null ? (
        <section>
          <span className="font-medium">File details:</span>
          <ul className="font-light text-sm">
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      ) : (
        <Empty />
      )} */}

      {file !== null ? (
        <section>
          <span className="font-medium">File details:</span>
          <ul className="font-light text-sm">
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      ) : (
        <section>
          <span className="font-medium">File details:</span>
          <ul className="font-light text-sm">
            <li>Name: {defaultData}</li>
            <li>Type: {defaultData}</li>
            <li>Size: {defaultData}</li>
          </ul>
        </section>
      )}
    </div>
  );
}

function ImageSelector({
  file,
  setFile,
  handleFileChange,
}: {
  file: TypeFile;
  setFile: Dispatch<SetStateAction<TypeFile>>
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  const extraInputStyles: string = "file:cursor-pointer file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-600 dark:file:text-blue-100 dark:hover:file:bg-blue-500";

  return (
    <div className="font-geist flex flex-col gap-2 mb-2">
      <span>Select some page to visualize your story:</span>
      {/* <input
        ref={inputRef}
        className={`w-fit py-1 px-2 bg-white border-1 border-solid border-platinum rounded-[10px] ${extraInputStyles}`}
        type="file"
        accept="image/png, image/jpeg"
      /> */}
      <input
        className={`w-fit py-1 px-2 bg-white border-1 border-solid border-platinum rounded-[10px] ${extraInputStyles}`}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
    </div>
  );
}

function Background({
  file,
  children,
}: {
  file: TypeFile;
  children: ReactNode;
}) {
  let currentStory: string = file !== null ? `/src/assets/instagram/stories/${file}` : Story;

  return (
    <div
      style={{
        background: "black",
        backgroundImage: `url(${currentStory})`,
        backgroundPosition: "center",
        backdropFilter: "blur(10px)",
      }}
      className={`flex items-center justify-center relative rounded-[10px]`}
    >
      <div className="w-full h-full bg-white/10 backdrop-blur-3xl flex items-center justify-center py-4">
        {children}
      </div>
    </div>
  );
}

function MainContent({
  file,
  setFile,
  handleFileChange,
}: {
  file: TypeFile;
  setFile: Dispatch<SetStateAction<TypeFile>>
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}) {
  let currentStory: string = file !== null ? `/src/assets/instagram/stories/${file}` : Story;

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
        src={currentStory}
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