"use client";

import { useEffect, useState } from "react";

import { FlexWrapper } from "@component/FlexWrapper";
import { SlidingNumber } from "@component/motion-primitives/slidering-number";

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

  return (
    <FlexWrapper
      mode="dev"
      color="border-blue-500"
      direction="flex-col"
      gap="2"
      padding
    >
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
