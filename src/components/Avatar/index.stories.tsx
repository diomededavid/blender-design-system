import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Avatar} from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Avatar",
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {control: "select"},
  },
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  size: "w-8",
  imgUrl: "https://robohash.org/bob",
  altDesc: "Robot",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "w-12",
  imgUrl: "https://robohash.org/bob",
  altDesc: "Robot",
};

export const Large = Template.bind({});
Large.args = {
  size: "w-16",
  imgUrl: "https://robohash.org/bob",
  altDesc: "Robot",
};

export const XLarge = Template.bind({});
XLarge.args = {
  size: "w-24",
  imgUrl: "https://robohash.org/bob",
  altDesc: "Robot",
};
