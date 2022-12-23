import { ComponentStory, ComponentMeta } from "@storybook/react";

import DropdownMenu from ".";
import Navbar from "../Navbar";

const menuItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  {
    label: "Products",
    url: "/products",
    subitems: [
      { label: "Product 1", url: "/products/1" },
      { label: "Product 2", url: "/products/2" },
      { label: "Product 3", url: "/products/3" },
    ],
  },
];

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
  items: menuItems,
};
