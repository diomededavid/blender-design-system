import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Badge} from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {control: "radio"},
  },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  label: "Badge",
  color: "badge-primary",
  size: "badge-lg",
};

export const Normal = Template.bind({});
Normal.args = {
  label: "Badge",
  color: "badge-secondary",
  size: "badge-md",
};

export const Small = Template.bind({});
Small.args = {
  label: "Badge",
  color: "badge-accent",
  size: "badge-sm",
};

export const Tiny = Template.bind({});
Tiny.args = {
  label: "Badge",
  color: "badge-ghost",
  size: "badge-xs",
};
