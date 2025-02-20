import myvideo from "@/assets/youtube/videos/venus-war.mp4";

export function Video() {
  return (
    <video controls>
      <source src={myvideo} type="video/mp4" />
    </video>
  );
}
