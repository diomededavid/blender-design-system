import { ComponentStory } from "@storybook/react";

import DropdownMenu from ".";

export default {
  title: "Atoms / Dropdown Menu",
  component: DropdownMenu,
};

const menuItems = [
  {
    label: "Dropdown Menu",
    subItems: [
      { label: "Item 1", url: "/products/1" },
      { label: "Item 2", url: "/products/2" },
      { label: "Item 3", url: "/products/3" },
    ],
  },
];

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: menuItems,
};
