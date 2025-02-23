import {
  Flex,
  Avatar,
} from "@radix-ui/themes";

import { TextIcon } from "./TextIcon";
import { IconImage } from "./IconImage";
import { SingleIcon } from "./SingleIcon";
import { Search } from "./Search";
import { YouTube } from "./YouTube";

import AddIcon from "@asset/google/material-icons/add.svg";
import MicIcon from "@asset/google/material-icons/mic.svg";
import NotificationIcon from "@asset/google/material-icons/notifications-none.svg";

import AvatarImage from "@asset/image-001.jpg";

export function Navbar() {
  return (
    <Flex justify="between">
      <YouTube userCountry="MX" />

      <Flex gapX="4">
        <Search>
          <input
            type="text"
            className="w-full outline-none"
            placeholder="Search"
          />
        </Search>

        <SingleIcon>
          <IconImage
            icon={MicIcon}
            iconSize={24}
            iconAlt="microphone icon"
          />
        </SingleIcon>

        <TextIcon>
          <IconImage
            icon={AddIcon}
            iconSize={24}
            iconAlt="plus logotype"
          />

          Add video
        </TextIcon>


        <SingleIcon>
          <IconImage
            icon={NotificationIcon}
            iconSize={24}
            iconAlt="notification icon"
          />
        </SingleIcon>

        <Avatar
          src={AvatarImage}
          fallback="A"
          width={32}
          height={32}
          radius="full"
          alt="avatar image"
        />
      </Flex>
    </Flex>
  );
}
