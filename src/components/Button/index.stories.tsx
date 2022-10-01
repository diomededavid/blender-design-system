import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Button} from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {control: "radio"},
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  label: "Button",
  color: "btn-primary",
  size: "btn-lg",
  isOutline: true,
};

export const Normal = Template.bind({});
Normal.args = {
  label: "Button",
  color: "btn-secondary",
  size: "btn",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
  color: "btn-accent",
  size: "btn-sm",
};

export const Tiny = Template.bind({});
Tiny.args = {
  label: "Button",
  color: "btn-ghost",
  size: "btn-xs",
};

export const Wide = Template.bind({});
Wide.args = {
  label: "Button",
  color: "btn-primary",
  isWide: true
};
