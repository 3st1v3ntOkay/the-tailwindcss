import { Link } from "./Link";

import { whichMode } from "./utils/whichMode";

import type { ReactNode } from "react";
import type { ColorsAvailable, Mode } from "./utils/whichMode";

export function Mansory({
  children,
  mode = "dev",
  color = "border-blue-500"
}: {
  children: ReactNode;
  mode: Mode;
  color: ColorsAvailable;
}) {
  return (
    <div className={`grid grid-cols-2 gap-4 ${whichMode(mode, color)}`}>
      {children}
    </div>
  );
}

export function Card({
  children,
  mode = "dev",
  color = "border-blue-500",
}: {
  children: ReactNode;
  mode: Mode;
  color: ColorsAvailable;
}) {
  return (
    <section className={`col-span-1 font-geist p-2 rounded-lg ${whichMode(mode, color, "border-2 border-solid border-platinum")} flex flex-col gap-2`}>
      {children}
    </section>
  );
}

export function Status({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="bg-blue-100 text-blue-600 font-medium text-sm rounded-lg px-3 py-0.5 w-fit h-fit">
      {children}
    </span>
  );
}

export function CardAvatar({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="w-8 h-8 bg-night rounded-full bg-center object-cover overflow-clip">
      <img
        className="h-full"
        src={image}
        alt={imageAlt}
      />
    </div>
  );
}

export function CardText({
  demoUrl,
  demoName,
  children,
}: {
  demoUrl: string;
  demoName: string;
  children: ReactNode;
}) {
  return (
    <div>
      <Link url={demoUrl}>{demoName}</Link>
      <p>{children}</p>
    </div>
  );
}

export function CardImage({
  image,
  imageSize,
  imageAlt,
}: {
  image: string;
  imageSize: number;
  imageAlt: string;
}) {
  return (
    <img
      className="w-32"
      src={image}
      width={imageSize}
      height={imageSize}
      alt={imageAlt}
    />
  );
}

export function IconNumbered({
  icon,
  iconAlt,
  children,
}: {
  icon: string;
  iconAlt: string;
  children: ReactNode;
}) {
  return (
    <span className="flex gap-2 cursor-pointer">
      <img
        src={icon}
        width={16}
        height={16}
        alt={iconAlt}
      />

      <p className="font-geist text-sm">
        {children}
      </p>
    </span>
  );
}
