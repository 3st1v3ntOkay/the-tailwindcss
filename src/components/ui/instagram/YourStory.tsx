export function YourStory({
  file,
}: {
  file: string;
}) {
  return (
    <img
      className="aspect-instagram-story w-116 rounded-lg"
      src={file}
      alt="random story"
    />
  );
}