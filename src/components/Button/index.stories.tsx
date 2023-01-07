import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    color: { control: "select" },
    size: { control: "select" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  color: "primary",
  handleClick: () => console.log("You clicked on the pink circle!"),
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  ...Default.args,
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "sm",
};

export const Tiny = Template.bind({});
Tiny.args = {
  ...Default.args,
  size: "xs",
};

export const Wide = Template.bind({});
Wide.args = {
  ...Default.args,
  wide: true,
};
