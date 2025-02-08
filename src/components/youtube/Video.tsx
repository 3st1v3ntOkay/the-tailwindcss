import myvideo from "@/assets/videos/映画『ヴイナス戦記』冒頭10分映像【Blu-ray ＜特装限定版＞　7月26日（金）.mp4";

export function Video() {
  return (
    <video controls>
      <source src={myvideo} type="video/mp4" />
    </video>
  );
}
