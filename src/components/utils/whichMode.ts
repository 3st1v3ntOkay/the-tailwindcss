export type Mode = "dev" | "prod";

export type ColorsAvailable =
  "border-red-500"
  | "border-orange-500"
  | "border-yellow-500"
  | "border-green-500"
  | "border-blue-500"
  | "border-violet-500";

export const whichMode = (
  mode: Mode,
  color: ColorsAvailable,
  customStyles?: string,
): string => {
  return mode === "dev" ? `rounded-lg border-2 ${color} border-dashed` : `${customStyles}`;
}
