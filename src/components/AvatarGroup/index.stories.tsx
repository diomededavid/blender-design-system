// List.stories.js|jsx

import {AvatarGroup} from "./index";
import {Avatar} from "../Avatar/index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Atoms/Avatar/Avatar Group",
  component: AvatarGroup,
};

export const ManyItems = () => (
  <AvatarGroup>
    <Avatar
      imgUrl="https://api.lorem.space/image/face?hash=4818"
      size="w-12"
      altDesc="Avatar"
    />
    <Avatar
      imgUrl="https://api.lorem.space/image/face?hash=4820"
      size="w-12"
      altDesc="Avatar"
    />
    <Avatar
      imgUrl="https://api.lorem.space/image/face?hash=4810"
      size="w-12"
      altDesc="Avatar"
    />
  </AvatarGroup>
);
