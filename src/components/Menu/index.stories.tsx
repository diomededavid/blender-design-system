import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Menu} from '.';

export default {
    title: "Menu",
    component: Menu
};

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
 text: "Menu",
 url: "https://www.google.com/",
};