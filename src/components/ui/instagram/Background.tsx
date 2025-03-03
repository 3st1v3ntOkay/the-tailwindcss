import type { ReactNode } from "react";
import { currentStory } from "./utils/currentStory";

export function Background({
  file,
  children,
}: {
  file: string | null;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        background: "black",
        backgroundImage: `url(${currentStory(file)})`,
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