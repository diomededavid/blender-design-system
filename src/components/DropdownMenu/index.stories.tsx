import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DropdownMenu } from ".";

export default {
  title: "Dropdown Menu",
  component: DropdownMenu,
};

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  menuItems: {
    item: "test item",
    url: "https://www.google.com/",
  },
  menuLabel: "Button",
};
