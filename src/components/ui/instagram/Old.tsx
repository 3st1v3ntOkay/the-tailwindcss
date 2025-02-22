import MusicNote from "@/assets/instagram/music-note.svg"

function AlbumTopInfo({
  artist = "Casiopea",
  year = "1979-05-25",
}: {
  artist: string;
  year: string;
}) {
  // todo: hacer una funcion que te cambie el formato ingles a YYYY-MM-DD
  // time tag docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time

  return (
    <span className="flex items-center gap-2 font-geist">
      <p>{artist}</p>
      <Dot />
      <time dateTime="1979-05-25">{year}</time>
    </span>
  );
}

function AlbumImage({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <img
      className="aspect-square"
      src={image}
      width={300}
      height={300}
      alt={alt}
    />
  );
}

function Dot() {
  return (
    <div className="w-1 h-1 rounded-full bg-night"></div>
  );
}

function BigNumber() {
  return (
    <p className="font-caslon text-9xl absolute -right-[80px] -bottom-[74px] text-[500px] opacity-[32%]">
      4
    </p>
  );
}

function Platform({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <div className="font-geist">
      <div className="flex">
        <img src={MusicNote} alt="music note icon" />
        <p>Listen on</p>
      </div>
      <img src={image} alt={alt} />
    </div>
  );
}
