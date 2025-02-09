import { useEffect, useState } from "react";
import { Button } from "@radix-ui/themes";

export function Navbar() {
  const [loading, setLoading] = useState<boolean>(true);
  const [count, setCount] = useState<number>(0);

  const delay: number = 1000 * 2;

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, [count]);

  return (
    <Button onClick={() => setCount(count + 1)}>
      loading the page
    </Button>
  );
}
