export function Avatar({
  photo,
}: {
  photo: string;
}) {
  return (
    <div className="cursor-pointer rounded-full w-8 h-8 bg-night overflow-clip">
      <img
        className="w-full h-full"
        src={photo}
        // width={32}
        // height={32}
        alt="random photo"
      />
    </div>
  );
}
