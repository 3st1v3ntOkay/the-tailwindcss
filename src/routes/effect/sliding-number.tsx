"use client";

import { useEffect, useState } from "react";

import { FlexWrapper } from "@component/FlexWrapper";
import { Note, Notes } from "@component/Notes";
import { Empty } from "@component/Empty";
import { Status } from "@component/Card";

import { SlidingNumber } from "@component/motion-primitives/sliding-number";

import { dataSlidingNumber } from "@data/routes/effect/sliding-number";

import { setCreditsTo } from "@route/utils/setCreditsTo";

export function SlidingNumberPage() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isThereNotes: boolean = true;

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
        padding={false}
      >
        <Notes>
          {isThereNotes ? dataSlidingNumber.map(({
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

      <div className="flex items-center gap-0.5 font-mono">
        <SlidingNumber value={hours} padStart={true} />
        <span className="text-zinc-500">:</span>
        <SlidingNumber value={minutes} padStart={true} />
        <span className="text-zinc-500">:</span>
        <SlidingNumber value={seconds} padStart={true} />
      </div>
    </FlexWrapper>
  );
}
