import {
  Flex,
  Avatar,
  Skeleton,
  Button,
  Text,
  Box,
} from "@radix-ui/themes";

import SearchIcon from "@/assets/svg/material-icons/search.svg";
import AddIcon from "@/assets/svg/material-icons/add.svg";
import MicIcon from "@/assets/svg/material-icons/mic.svg";
import NotificationIcon from "@/assets/svg/material-icons/notifications-none.svg";

import YouTubeLogoType from "@/assets/images/youtube-logotype.png";
import AvatarImage from "@/assets/images/bye-bye-cat.jpg";
import { useEffect, useState } from "react";

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
    <Flex justify="between">
      <img
        className=""
        src={YouTubeLogoType}
        width={143}
        height={32}
        alt="youtube logotype"
      />

      <Flex gapX="4">
        <Skeleton loading={loading}>
          <Flex as="div" align="center" gapX="2">
            Search

            <img
              className=""
              src={SearchIcon}
              width={24}
              height={24}
              alt="search icon"
            />
          </Flex>
        </Skeleton>

        <Skeleton loading={loading}>
          <Box as="div" className="bg-reversed rounded-full border-2 border-red-500 p-2">
            <img
              className="bg-reversed"
              src={MicIcon}
              width={24}
              height={24}
              alt="microphone icon"
            />
          </Box>
        </Skeleton>

        <Skeleton loading={loading}>
          <Flex as="div" align="center">
            <img
              className=""
              src={AddIcon}
              width={24}
              height={24}
              alt="plus logotype"
            />

            Add video
          </Flex>
        </Skeleton>

        <Skeleton loading={loading}>
          <Box as="div" className="bg-reversed rounded-full border-2 border-red-500 p-2">
            <img
              src={NotificationIcon}
              width={24}
              height={24}
              alt="notification icon"
            />
          </Box>
        </Skeleton>

        <Skeleton loading={loading}>
          <Avatar
            src={AvatarImage}
            fallback="A"
            width={32}
            height={32}
            radius="full"
            alt="avatar image"
          />
        </Skeleton>

        <Button onClick={() => setCount(count + 1)}>
          loading the page
        </Button>
      </Flex>
    </Flex>
  );
}
