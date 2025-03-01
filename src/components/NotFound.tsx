import { Status } from "./Card";
import { Link } from "./Link";

export function NotFound() {
  return (
    <>
      <p>page not found please return homepage</p>
      <Status><Link url="/">back home</Link></Status>
    </>
  );
}