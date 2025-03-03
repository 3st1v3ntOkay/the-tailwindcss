import Story from "@asset/instagram/stories/story-005.png";

export const currentStory = (file: string | null): string => {
  return file !== null ? `/src/assets/instagram/stories/${file}` : Story;
};
