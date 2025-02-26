export function StoryBar({
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