export function Icon({
  icon,
  iconSize = 16,
  iconAlt,
}: {
  icon: string;
  iconSize: 16 | 24 | 32 | 48;
  iconAlt: string;
}) {
  return (
    <img
      className="cursor-pointer"
      src={icon}
      width={iconSize}
      height={iconSize}
      alt={iconAlt}
    />
  );
}