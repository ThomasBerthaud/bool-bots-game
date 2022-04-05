import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../../index.css";
import { UIButton } from "../../ui/components/UIButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/UIButton",
    component: UIButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof UIButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UIButton> = (args) => <UIButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    type: "primary",
    label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    type: "secondary",
    label: "Button",
};

export const Large = Template.bind({});
Large.args = {
    ...Primary.args,
    size: "large",
};

export const Small = Template.bind({});
Small.args = {
    ...Primary.args,
    size: "small",
};
