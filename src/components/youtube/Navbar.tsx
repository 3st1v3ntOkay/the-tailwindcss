import {
  Flex,
  Avatar,
} from "@radix-ui/themes";

import AddIcon from "@/assets/svg/material-icons/add.svg";
import MicIcon from "@/assets/svg/material-icons/mic.svg";
import NotificationIcon from "@/assets/svg/material-icons/notifications-none.svg";

import AvatarImage from "@/assets/images/bye-bye-cat.jpg";
import { TextIcon } from "./components/TextIcon";
import { IconImage } from "./components/IconImage";
import { SingleIcon } from "./components/SingleIcon";
import { Search } from "./components/Search";
import { YouTube } from "./components/YouTube";

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
