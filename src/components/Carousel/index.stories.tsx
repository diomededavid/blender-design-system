import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Carousel } from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => <Carousel />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// Large.args = {
//   label: "Button",
//   color: "btn-primary",
//   size: "btn-lg",
//   isOutline: true,
// };
