import randomVideo from "@asset/google/youtube/videos/90s-anime.mp4";

export function Video() {
  return (
    <video controls>
      <source src={randomVideo} type="video/mp4" />
    </video>
  );
}
