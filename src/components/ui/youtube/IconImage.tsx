export function IconImage({
  icon,
  iconSize = 16,
  iconAlt,
}: {
  icon: string;
  iconSize: 24 | 16;
  iconAlt: string;
}) {
  return (
    <img
      src={icon}
      width={iconSize}
      height={iconSize}
      alt={iconAlt}
    />
  );
}