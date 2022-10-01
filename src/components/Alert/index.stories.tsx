import {ComponentStory, ComponentMeta} from "@storybook/react";

import {Alert} from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Atoms/Alert",
    component: Alert,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        color: {control: "select"},
    },
} as ComponentMeta<typeof Alert>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
    color: "alert-info",
    title: "Info",
};

export const Success = Template.bind({});
Success.args = {
    color: "alert-success",
    title: "Success",
};

export const Warning = Template.bind({});
Warning.args = {
    color: "alert-warning",
    title: "Warning",
};

export const Error = Template.bind({});
Error.args = {
    color: "alert-error",
    title: "Error",
};
