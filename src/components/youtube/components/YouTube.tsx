import { Link } from "@radix-ui/themes";

import YouTubeLogoType from "@/assets/youtube/youtube-logotype.png";

type CountryOptions = "MX" | "JP" | "US";

export function YouTube({
  userCountry,
}: {
  userCountry: CountryOptions;
}) {
  return (
    <div className="relative w-fit h-fit">
      <Link href="">
        <img
          src={YouTubeLogoType}
          width={120}
          height={26.84}
          alt="youtube logotype"
        />
      </Link >

      <YouTubeTag input={userCountry} />
    </div>
  );
}

function YouTubeTag({
  input = "MX",
}: {
  input: CountryOptions;
}) {
  return (
    <span className="absolute -top-[8px] -right-[28px] font-geist font-semibold text-dim-gray text-[14px]">
      {input}
    </span>
  );
}
