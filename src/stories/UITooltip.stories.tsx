import { UITooltip } from "../ui/components/UITooltip";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../index.css";

export default {
    title: "Tooltip",
    component: UITooltip,
    parameters: {
        layout: "centered",
    },
} as ComponentMeta<typeof UITooltip>;

const Template: ComponentStory<typeof UITooltip> = (args) => <UITooltip {...args}>{args.children}</UITooltip>;

export const Top = Template.bind({});
Top.args = {
    text: "this is a tooltip",
    direction: "top",
    children: <p>This is a text with a tooltip</p>,
};

export const Bottom = Template.bind({});
Bottom.args = {
    ...Top.args,
    direction: "bottom",
};

export const Left = Template.bind({});
Left.args = {
    ...Top.args,
    direction: "left",
};

export const Right = Template.bind({});
Right.args = {
    ...Top.args,
    direction: "right",
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Top.args,
    disabled: true,
};
